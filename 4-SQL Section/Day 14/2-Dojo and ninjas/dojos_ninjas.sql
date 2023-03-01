use dojos_and_ninjas_schema;
-- select * from dojos;
-- select * from ninjas;

SELECT *
FROM dojos
JOIN ninjas ON dojo_id_dojo = id_dojo
WHERE id_ninjas = (SELECT MAX(id_ninjas) FROM ninjas);

SELECT  *
FROM ninjas
JOIN dojos ON dojo_id_dojo = id_dojo
WHERE id_ninjas = 6;

insert INTO ninjas(first_name,last_name,age, created_at,updated_at,dojo_id_dojo)
 VALUES ('tamil','dan',26,now(),now(),6);
insert INTO ninjas(first_name,last_name,age, created_at,updated_at,dojo_id_dojo) 
 VALUES ('dan','ahmad',23,now(),now(),6);
 insert INTO ninjas(first_name,last_name,age, created_at,updated_at,dojo_id_dojo)
 VALUES ('fatima','hashim',23,now(),now(),6);
 
 use dojos_and_ninjas_schema;
select * from dojos;
insert INTO dojos(name, created_at,updated_at)
 VALUES ('naser',now(),now());
insert INTO dojos(name, created_at,updated_at) 
 VALUES ('fadi',now(),now());
 insert INTO dojos(name, created_at,updated_at)
 VALUES ('amin',now(),now());

DELETE FROM dojos WHERE id_dojo>=1 and id_dojo<=3;
