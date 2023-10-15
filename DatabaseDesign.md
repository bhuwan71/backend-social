### User Table

- Columns:
  - `id` (Primary key)
  - `username` (Unique)
  - `email` (Unique)
  - `password`
  - `first_name`
  - `last_name`
  - `date_of_birth`
  - `profile_image_url`
  - `bio`
  - `location`
  - `website`
  - `followers_count`
  - `following_count`
  - `post_count`

### Post Table

- Columns:
  - `id` (Primary key)
  - `content` (text, multimedia content, or reference to an external URL)
  - `created_at`
  - `updated_at`
  - `user_id` (Foreign key referencing the User table) //author
  - `likes_count`
  - `comments_count`
  - `shares_count`

### Comment Table

- Columns:
  - `id` (Primary key)
  - `content`
  - `created_at`
  - `user_id` (Foreign key referencing the User table)
  - `post_id` (Foreign key referencing the Post table)

### Like Table

- Columns:
  - `id` (Primary key)
  - `user_id` (Foreign key referencing the User table)
  - `post_id` (Foreign key referencing the Post table)

### Share Table

- Columns:
  - `id` (Primary key)
  - `user_id` (Foreign key referencing the User table)
  - `post_id` (Foreign key referencing the Post table)
  - `created_at`

### Friend Request Table

- Columns:
  - `id` (Primary key)
  - `sender_id` (Foreign key referencing the User table)
  - `receiver_id` (Foreign key referencing the User table)
  - `status` (e.g., pending, accepted, declined)
  - `created_at`
  - `updated_at`

### Following/Follower Table

- Columns:
  - `id` (Primary key)
  - `follower_id` (Foreign key referencing the User table)
  - `following_id` (Foreign key referencing the User table)

### Chat Table

- Columns:
  - `id` (Primary key)
  - `user1_id` (Foreign key referencing the User table)
  - `user2_id` (Foreign key referencing the User table)

### Message Table

- Columns:
  - `id` (Primary key)
  - `chat_id` (Foreign key referencing the Chat table)
  - `sender_id` (Foreign key referencing the User table)
  - `content`
  - `timestamp`

### Group Table (for group chats)

- Columns:
  - `id` (Primary key)
  - `name`
  - `created_at`
  - `updated_at`

### Group Member Table

- Columns:
  - `id` (Primary key)
  - `group_id` (Foreign key referencing the Group table)
  - `user_id` (Foreign key referencing the User table)
  - `joined_at`
  - `leave_at`

### Notification Table

- Columns:
  - `id` (Primary key)
  - `user_id` (Foreign key referencing the User table)
  - `type` (e.g., like, comment, friend request)
  - `entity_id` (Foreign key referencing the relevant entity, such as Post, Comment, or Friend Request)
  - `is_read`
  - `created_at`

### Hashtag Table (for tagging posts)

- Columns:
  - `id` (Primary key)
  - `name` (Unique)


### PostHashtag Table (many-to-many relationship between Post and Hashtag)

- Columns:
  - `id` (Primary key)
  - `post_id` (Foreign key referencing the Post table)
  - `hashtag_id` (Foreign key referencing the Hashtag table)

### Notification Settings Table

- Columns:
  - `id` (Primary key)
  - `user_id` (Foreign key referencing the User table)
  - `notification_type` (e.g., email, push, in-app)
  - `enabled`

### User Block Table

- Columns:
  - `id` (Primary key)
  - `user_id` (Foreign key referencing the User table)
  - `blocked_user_id` (Foreign key referencing the User table)

### Poll Table

- Columns:
  - `id` (Primary key)
  - `question`
  - `options` (store poll options as JSON or a related table)
  - `created_at`
  - `updated_at`
  - `user_id` (Foreign key referencing the User table)

### Poll Vote Table

- Columns:
  - `id` (Primary key)
  - `poll_id` (Foreign key referencing the Poll table)
  - `user_id` (Foreign key referencing the User table)
  - `selected_option`

This detailed structure includes features like user profiles, posts, comments, likes, shares, friend requests, following/followers, messaging, group chats, notifications, hashtags, notification settings, user blocking, polls, and poll voting.
