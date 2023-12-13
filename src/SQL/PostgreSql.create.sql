




CREATE TABLE ФормРезПост (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 СтатусЗаказа VARCHAR(11) NULL,
 НаличиеДеф BOOLEAN NULL,
 УдовлКл VARCHAR(7) NULL,
 ФормирРаспред UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПунктПогруз (
 primaryKey UUID NOT NULL,
 Наим VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товары (
 primaryKey UUID NOT NULL,
 НаимТовара VARCHAR(255) NULL,
 Произв VARCHAR(255) NULL,
 ЕдИзм VARCHAR(4) NULL,
 Цена DOUBLE PRECISION NULL,
 Масса DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧИнфОЗаказе (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Товары UUID NOT NULL,
 ДокумПоставки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СписокБарж (
 primaryKey UUID NOT NULL,
 НомерБаржи INT NULL,
 Производитель VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СписокКонтей (
 primaryKey UUID NOT NULL,
 НомерКонтей INT NULL,
 НаимКонтей VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 НаимЗаказа VARCHAR(255) NULL,
 ИНН INT NULL,
 Телефон INT NULL,
 ПунктПостав VARCHAR(255) NULL,
 РасСчет INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокумПоставки (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 НомерДог INT NULL,
 Клиенты UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФормирРаспред (
 primaryKey UUID NOT NULL,
 НомерРаспред INT NULL,
 Дата TIMESTAMP(3) NULL,
 СписокБарж UUID NOT NULL,
 ДокумПоставки UUID NOT NULL,
 СписокКонтей UUID NOT NULL,
 ПунктПогруз UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПунктПогрузки (
 primaryKey UUID NOT NULL,
 НаименППогр VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ФормРезПост ADD CONSTRAINT FK8ec94d48aa5660d3c61e97dab7d4f17c20426a6f FOREIGN KEY (ФормирРаспред) REFERENCES ФормирРаспред; 
CREATE INDEX Index8ec94d48aa5660d3c61e97dab7d4f17c20426a6f on ФормРезПост (ФормирРаспред); 

 ALTER TABLE ТЧИнфОЗаказе ADD CONSTRAINT FKd1f0c7044cf596c652c61a4ba3463fca2190510d FOREIGN KEY (Товары) REFERENCES Товары; 
CREATE INDEX Indexd1f0c7044cf596c652c61a4ba3463fca2190510d on ТЧИнфОЗаказе (Товары); 

 ALTER TABLE ТЧИнфОЗаказе ADD CONSTRAINT FK539c7e94d74cd0d39f7902c1b47fcb3addc40025 FOREIGN KEY (ДокумПоставки) REFERENCES ДокумПоставки; 
CREATE INDEX Index539c7e94d74cd0d39f7902c1b47fcb3addc40025 on ТЧИнфОЗаказе (ДокумПоставки); 

 ALTER TABLE ДокумПоставки ADD CONSTRAINT FKd0d911e5fb6342d625cd19e931c9262d24a1c6d8 FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Indexd0d911e5fb6342d625cd19e931c9262d24a1c6d8 on ДокумПоставки (Клиенты); 

 ALTER TABLE ДокумПоставки ADD CONSTRAINT FK6610040e6177a198dd8009f73d7b95f799200bae FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index6610040e6177a198dd8009f73d7b95f799200bae on ДокумПоставки (Организация); 

 ALTER TABLE ФормирРаспред ADD CONSTRAINT FKb5b0923f2cd7601526f519963348a1ddd676f709 FOREIGN KEY (СписокБарж) REFERENCES СписокБарж; 
CREATE INDEX Indexb5b0923f2cd7601526f519963348a1ddd676f709 on ФормирРаспред (СписокБарж); 

 ALTER TABLE ФормирРаспред ADD CONSTRAINT FKd59ce7e772d7caa80645ebae92fec77da7050a59 FOREIGN KEY (ДокумПоставки) REFERENCES ДокумПоставки; 
CREATE INDEX Indexd59ce7e772d7caa80645ebae92fec77da7050a59 on ФормирРаспред (ДокумПоставки); 

 ALTER TABLE ФормирРаспред ADD CONSTRAINT FK7541797d608f40d0c4a91d6bdbb2d9a43d9f429a FOREIGN KEY (СписокКонтей) REFERENCES СписокКонтей; 
CREATE INDEX Index7541797d608f40d0c4a91d6bdbb2d9a43d9f429a on ФормирРаспред (СписокКонтей); 

 ALTER TABLE ФормирРаспред ADD CONSTRAINT FK1edfa16fdb13a34adabb0877328a694b907f72f9 FOREIGN KEY (ПунктПогруз) REFERENCES ПунктПогруз; 
CREATE INDEX Index1edfa16fdb13a34adabb0877328a694b907f72f9 on ФормирРаспред (ПунктПогруз); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

