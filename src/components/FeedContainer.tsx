import {
  IonButton,
  IonInput,
  IonCard,
  IonContent,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonAlert,
  IonText,
  IonAvatar,
  IonCol,
  IonRow,
  IonIcon,
  IonPopover,
  IonModal,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonTextarea,
  IonFooter
} from '@ionic/react';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { User } from '@supabase/supabase-js';
import { pencil, trash, heart } from 'ionicons/icons';

interface Post {
  post_id: string;
  user_id: number;
  username: string;
  avatar_url: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
}

const FeedContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [popoverState, setPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  useEffect(() => {
    const fetchUserAndData = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (authData?.user) {
        setUser(authData.user);
        const { data: userData } = await supabase
          .from('users')
          .select('user_id, username, user_avatar_url')
          .eq('user_email', authData.user.email)
          .single();

        if (userData) {
          setUser({ ...authData.user, id: userData.user_id });
          setUsername(userData.username);
          fetchLikes(userData.user_id);
        }
      }

      const { data: postData } = await supabase
        .from('posts')
        .select('*')
        .order('post_created_at', { ascending: false });

      if (postData) setPosts(postData as Post[]);
    };

    const fetchLikes = async (userId: string) => {
      const { data } = await supabase
        .from('likes')
        .select('post_id')
        .eq('user_id', userId);
      setLikedPosts(data?.map((like) => like.post_id) || []);
    };

    fetchUserAndData();
  }, []);

  const createPost = async () => {
    if (!postContent.trim() || !user || !username) return;

    const { data: userData } = await supabase
      .from('users')
      .select('user_avatar_url')
      .eq('user_id', user.id)
      .single();

    const avatarUrl = userData?.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';

    const { data } = await supabase
      .from('posts')
      .insert([{ post_content: postContent.trim(), user_id: user.id, username, avatar_url: avatarUrl }])
      .select('*');

    if (data) {
      setPosts([data[0] as Post, ...posts]);
      setPostContent('');
    }
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('posts').delete().match({ post_id });
    setPosts(posts.filter(post => post.post_id !== post_id));
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsModalOpen(true);
  };

  const savePost = async () => {
    if (!postContent.trim() || !editingPost) return;

    const { data } = await supabase
      .from('posts')
      .update({ post_content: postContent.trim() })
      .match({ post_id: editingPost.post_id })
      .select('*');

    if (data) {
      const updatedPost = data[0] as Post;
      setPosts(posts.map(post => (post.post_id === updatedPost.post_id ? updatedPost : post)));
      setPostContent('');
      setEditingPost(null);
      setIsModalOpen(false);
      setIsAlertOpen(true);
    }
  };

  const toggleLike = async (postId: string) => {
    if (!user) return;

    const alreadyLiked = likedPosts.includes(postId);

    if (alreadyLiked) {
      await supabase.from('likes').delete().match({ user_id: user.id, post_id: postId });
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      await supabase.from('likes').insert({ user_id: user.id, post_id: postId });
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
      {user && (
        <IonCard style={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', background: '#fefefe' }}>
          <IonCardHeader>
            <IonCardTitle style={{ fontSize: '1.4rem', fontWeight: '600', color: '#3880ff' }}>🌟 What's on your mind?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonInput
              value={postContent}
              onIonChange={e => setPostContent(e.detail.value!)}
              placeholder="Write something... 💭"
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '12px',
                background: '#fff',
                marginBottom: '12px',
                fontSize: '1rem',
                color: '#333'
              }}
            />
            <IonButton
              expand="block"
              onClick={createPost}
              disabled={!postContent.trim()}
              style={{ backgroundColor: '#3880ff', color: 'white', fontSize: '1.1rem', borderRadius: '8px' }}
            >
              📨 Post It!
            </IonButton>
          </IonCardContent>
        </IonCard>
      )}

      {posts.map(post => (
        <IonCard key={post.post_id} style={{ marginTop: '1.5rem', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
          <IonCardHeader>
            <IonRow>
              <IonCol size="auto">
                <IonAvatar>
                  <img src={post.avatar_url} alt={`${post.username}'s avatar`} />
                </IonAvatar>
              </IonCol>
              <IonCol>
                <IonCardTitle style={{ fontSize: '1.2rem', fontWeight: '600' }}>{post.username}</IonCardTitle>
                <IonCardSubtitle style={{ color: '#888', fontSize: '0.9rem' }}>
                  {new Date(post.post_created_at).toLocaleString()}
                </IonCardSubtitle>
              </IonCol>
              <IonCol size="auto">
                <IonButton
                  fill="clear"
                  onClick={(e) => setPopoverState({ open: true, event: e.nativeEvent, postId: post.post_id })}
                >
                  <IonIcon icon={pencil} style={{ color: '#3880ff' }} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardHeader>

          <IonCardContent style={{ paddingTop: 0 }}>
            <IonText style={{ fontSize: '1.1rem', whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#333' }}>
              💬 {post.post_content}
            </IonText>

            <IonRow style={{ marginTop: '10px' }}>
            <IonButton
  size="small"
  fill="clear"
  onClick={() => toggleLike(post.post_id)}
  color={likedPosts.includes(post.post_id) ? 'danger' : 'medium'}
>
  <IonIcon icon={heart} slot="start" />
  {likedPosts.includes(post.post_id) ? 'Unheart' : 'Heart'}
</IonButton>

            </IonRow>
          </IonCardContent>

          <IonPopover
            isOpen={popoverState.open && popoverState.postId === post.post_id}
            event={popoverState.event}
            onDidDismiss={() => setPopoverState({ open: false, event: null, postId: null })}
          >
            <div style={{ padding: '10px' }}>
              <IonButton
                fill="clear"
                onClick={() => { startEditingPost(post); setPopoverState({ open: false, event: null, postId: null }); }}
                style={{ color: '#3880ff', fontSize: '1rem' }}
              >
                📝 Edit
              </IonButton>
              <IonButton
                fill="clear"
                color="danger"
                onClick={() => { deletePost(post.post_id); setPopoverState({ open: false, event: null, postId: null }); }}
                style={{ fontSize: '1rem' }}
              >
                🚮 Delete
              </IonButton>
            </div>
          </IonPopover>
        </IonCard>
      ))}

      <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>✍️ Edit Your Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonTextarea
            autoGrow
            value={postContent}
            placeholder="Make your post shine even brighter ✨"
            onIonChange={e => setPostContent(e.detail.value!)}
            style={{ background: '#f5f5f5', padding: '10px', borderRadius: '10px', fontSize: '1rem' }}
          />
        </IonContent>
        <IonFooter className="ion-padding" style={{ display: 'flex', gap: '10px' }}>
          <IonButton expand="block" onClick={savePost} style={{ backgroundColor: '#3880ff', color: 'white' }}>📥 Save</IonButton>
          <IonButton expand="block" color="medium" onClick={() => setIsModalOpen(false)}>❌ Cancel</IonButton>
        </IonFooter>
      </IonModal>

      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        header="Success"
        message="Post updated successfully! 🎉"
        buttons={['OK']}
      />
    </div>
  );
};

export default FeedContainer;
