-- Create pupils table
create table pupil_information (
		pupil_id varchar(25) PRIMARY KEY not null,
		user_id int not null,
		first_name varchar(255),
		last_name varchar(255),
		gender varchar(10),
		age INT,
		date_of_birth Date,
		place_of_birth TEXT,
		address TEXT,
		previous_school varchar(255),
		most_common_ailment varchar(255),
		immunization_program boolean default false,
		profile_photo varchar(255),
		Foreign key (user_id) references users(user_id)
);

-- convert date of birth to specified format
SELECT TO_CHAR(date_of_birth, 'YYYY-MM-DD') AS Formatted_Date_Of_Birth
FROM pupil_information;

create table parent_information (
	pupil_id varchar(25) not null,
--father info
	father_name varchar(255),
	father_address text,
	father_place_of_work varchar(255),
	father_email varchar(255),
	father_tel varchar(50),
--mother info
	mother_name varchar(255),
	mother_address text,
	mother_place_of_work varchar(255),
	mother_email varchar(255),
	mother_tel varchar(50),
--guardian info
	guardian_name varchar(255),
	guardian_address text,
	guardian_place_of_work varchar(255),
	guardian_email varchar(255),
	guardian_tel varchar(50),
--person responsible for payment
	payer_name varchar(255),
	payer_address text,
	payer_place_of_work varchar(255),
	payer_email varchar(255),
	payer_tel varchar(50),
	Foreign key (pupil_id) references pupil_information(pupil_id)
);

CREATE TABLE classes (
   class_code VARCHAR(25) PRIMARY KEY,
   class_name VARCHAR(255)
);
INSERT INTO classes (class_code, class_name) VALUES
('DC', 'Daycare'),
('N1', 'Nursery 1'),
('N2', 'Nursery 2'),
('N3', 'Reception'),
('P1', 'Prep 1'),
('P2', 'Prep 2'),
('P3', 'Prep 3'),
('P4', 'Prep 4'),
('P5', 'Prep 5'),
('P6', 'Prep 6'),
('J1', 'JSS 1'),
('J2', 'JSS 2'),
('J3', 'JSS 3');

create table student_admission (
		admission_id varchar(25) primary key not null,
		pupil_id varchar(25) not null,
		admission_date date not null,
		admission_status varchar(25) not null,
		registered_by varchar(255) not null,
		school_authority integer,
		class_code varchar(10),
		foreign key (pupil_id) references pupil_information(pupil_id),
		foreign key (class_code) references classes(class_code),
		foreign key (school_authority) references admin(admin_id)
);

--class history
CREATE TABLE class_history (
    class_history_id SERIAL PRIMARY KEY,
    pupil_id VARCHAR(25),
    class_code VARCHAR(25),
    academic_year VARCHAR(9), -- e.g., "2023-2024"
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (pupil_id) REFERENCES pupil_information(pupil_id),
    FOREIGN KEY (class_code) REFERENCES classes(class_code)
);
