use HotelBookingDb

CREATE TABLE Hotel(
Hotel_Id varchar(200) not null PRIMARY KEY,
Hotel_name varchar(255) not null,
Location varchar (200),
Phone_num varchar(200),
Rating float(50)
)
insert into Hotel values ('PR147','Radisson Blu','CP','7865462876','4.5'),('PR178','Vivanta by Taj','Dwarka','6437846840','4'),('EX324','Le Meridian','CP','6473984739','4'),('EX345','Pullman','Aerocity','9872536478','3.5'),
('EX765','Roseate House','Aerocity','8764563728','4.5'),('SU786','Trident','Gurgaon','9823554676','4'),('SU023','The Umrao','Gurgaon','9873452657','3.5'),('SU768','The Oberoi','Udyog Vihar','9965478328','4'),('SU355','Crown Plaza','Rohini','7634526770','3.5'),
('EX333','Lemon Tree','Janakpuri','8764356279','4');

select * from Hotel

CREATE TABLE Room(
Room_num int not null PRIMARY KEY,
Hotel_Id varchar(200) FOREIGN KEY REFERENCES Hotel(Hotel_Id) ON UPDATE CASCADE ON DELETE CASCADE,
Room_type varchar(255) not null,
Room_view varchar(200),
Price int,
Occupancy int
)
insert into Room values
('234','PR147','Premium','Pool','4000','4'),('345','PR178','Premium','Garden','4500','2'),('426','EX324','Executive','Pool','4300','5'),('303','EX345','Executive','Garden','4800','4'),('564','EX765','Executive','Mountain','5200','6'),
('208','SU786','Suite','Pool','5000','3'),('567','SU023','Suite','Mountain','5800','2'),('130','SU768','Suite','Lake','6500','2'),('207','SU355','Suite','Pool','5000','3'),('408','EX333','Executive','Garden','4800','4');

select * from Room


CREATE TABLE Booking(
Booking_Id int not null PRIMARY KEY,
Hotel_Id varchar(200) FOREIGN KEY REFERENCES Hotel(Hotel_Id) ON UPDATE CASCADE ON DELETE CASCADE,
Room_num INT FOREIGN KEY REFERENCES Room(Room_num) ON UPDATE NO ACTION ON DELETE NO ACTION,
Booking_date DATE
)
insert into Booking values
('10001','PR147','234','2021-12-10'),('10002','PR178','345','2021-02-13'),('10003','EX324','426','2021-10-15'),('10004','EX345','303','2021-12-10'),('10005','EX765','564','2021-07-05'),('10006','SU786','208','2021-06-04'),('10007','SU023','567','2021-09-05'),
('10008','SU768','130','2021-11-05'),('10009','SU355','207','2021-08-15'),('10010','EX333','408','2021-12-09');

SELECT * from Booking

CREATE TABLE Guest(
Guest_Id varchar(200) not null PRIMARY KEY,
Booking_Id int FOREIGN KEY REFERENCES Booking(Booking_Id) ON UPDATE CASCADE ON DELETE CASCADE,
Name varchar(250) not null,
Address varchar(200),
Phone_num varchar(250)
)
insert into Guest values
('01','10001','Nipurn','Delhi','6747094775'),('02','10002','Ronaldo','Mumbai','9833546772'),('03','10003','Messi','Kolkata','7863679384'),('04','10004','Ramos','Rajasthan','9765764454'),
('05','10005','Varane','Indore','7544575766'),('06','10006','Modric','Delhi','6675446575'),('07','10007','Kroos','Mumbai','64478586919'),('08','10008','Casemiro','Jammu','98767545314'),
('09','10009','Bale','Rajasthan','8865684742'),('10','10010','Rashford','Ahmedabad','6554458699');

select * from Guest
