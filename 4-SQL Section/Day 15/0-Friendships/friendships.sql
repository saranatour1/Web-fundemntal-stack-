use friendships_schema;
-- select * from users;
select * from friendships;
/*INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ('Amy', 'Giver', NOW(), NOW()), 
       ('Eli', 'Byers', NOW(), NOW()), 
       ('Big', 'Bird', NOW(), NOW()), 
       ('Kermit', 'The Frog', NOW(), NOW()), 
       ('Marky', 'Mark', NOW(), NOW());*/
/*INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ('sandra', 'hasna', NOW(), NOW());*/
/*INSERT INTO friendships (users_id, friend_id, created_at, updated_at)
VALUES (1,2, NOW(), NOW()), 
       (1,3, NOW(), NOW()), 
       (1,4, NOW(), NOW()), 
       (2,4, NOW(), NOW()), 
       (2,5, NOW(), NOW()),
       (5,3, NOW(), NOW());*/

/*SELECT users.first_name, users.last_name, 
       user2.first_name AS friend_first_name, user2.last_name 
       AS friend_last_name
FROM users
JOIN friendships ON users.id = friendships.users_id
LEFT JOIN users AS user2 ON user2.id = friendships.friend_id;*/

/*INSERT INTO friendships (users_id, friend_id, created_at, updated_at)
VALUES (1,6, NOW(), NOW()), 
       (2,1, NOW(), NOW()), 
       (2,3, NOW(), NOW()), 
       (3,2, NOW(), NOW()), 
       (3,5, NOW(), NOW()),
       (5,3, NOW(), NOW()),
       (4,3, NOW(), NOW()),
       (5,1, NOW(), NOW()),
       (5,6, NOW(), NOW()),
       (6,2, NOW(), NOW()),
       (6,3, NOW(), NOW());*/
/*SELECT users.first_name, users.last_name, 
       user2.first_name AS friend_first_name, user2.last_name 
       AS friend_last_name
FROM users
JOIN friendships ON users.id = friendships.users_id
LEFT JOIN users AS user2 ON user2.id = friendships.friend_id
where users.id =1 ;*/
/*SELECT COUNT(*) FROM friendships;
SELECT users.id, COUNT(*) AS num_friends
FROM users
JOIN friendships ON users.id = friendships.users_id 
OR users.id = friendships.friend_id
GROUP BY users.id
ORDER BY num_friends DESC
LIMIT 1;*/

