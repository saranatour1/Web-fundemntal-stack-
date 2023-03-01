use book_schema;
select * from authors;
select * from favorites;
/*INSERT INTO authors (name, created_at, updated_at)
VALUES
( 'Jane Austen', now(), now()),
('Emily Dickinson', now(), now()),
('Fyodor Dostoevsky', now(), now()),
( 'William Shakespeare',now(), now()),
('Lau Tzu', now(), now());*/
/*INSERT INTO books (title,num_of_pages, created_at, updated_at)
VALUES
( 'C Sharp',123, now(), now()),
('Java',144, now(), now()),
(' Python',15, now(), now()),
( 'PHP',200,now(), now()),
('Ruby',60, now(), now());*/
/*UPDATE books
SET title = 'C#'
WHERE id=1;*/
/*UPDATE authors
SET name = 'Bill Shakespeare'
WHERE id=4;*/
/*insert into favorites(author_id, book_id ,created_at,updated_at) 
values(1,2,now(),now());
*/
/*insert into favorites(author_id, book_id ,created_at,updated_at) 
values(2,3,now(),now());
*/
/*insert into favorites(author_id, book_id ,created_at,updated_at) 
values(3,4,now(),now());
*/
/*INSERT INTO favorites (author_id, book_id, created_at, updated_at)
SELECT 4, id, NOW(), NOW() FROM books;*/
/*SELECT *
FROM authors
 JOIN favorites  ON author_id = author_id
WHERE book_id = 3;
*/
/*DELETE FROM favorites
WHERE author_id = (
  SELECT author_id FROM (
    SELECT * FROM favorites WHERE book_id = 3 ORDER BY created_at LIMIT 1
  ) AS temp
)
AND book_id = 3;

*/
/*DELETE FROM favorites WHERE author_id = 1 AND book_id = 3 ORDER BY id ASC LIMIT 1;
*/
/*insert into favorites(author_id, book_id ,created_at,updated_at) 
values(5,2,now(),now());*/
/*SELECT * FROM books
JOIN favorites ON book_id = books.id
WHERE author_id = 3;*/
/*SELECT * FROM authors
JOIN favorites ON author_id = author_id
WHERE book_id=5;
*/




