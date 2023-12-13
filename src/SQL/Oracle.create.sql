



CREATE TABLE "ФормРезПост"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"СтатусЗаказа" NVARCHAR2(11) NULL,

	"НаличиеДеф" NUMBER(1) NULL,

	"УдовлКл" NVARCHAR2(7) NULL,

	"ФормирРаспред" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПунктПогруз"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наим" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товары"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаимТовара" NVARCHAR2(255) NULL,

	"Произв" NVARCHAR2(255) NULL,

	"ЕдИзм" NVARCHAR2(4) NULL,

	"Цена" FLOAT(126) NULL,

	"Масса" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧИнфОЗаказе"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Товары" RAW(16) NOT NULL,

	"ДокумПоставки" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СписокБарж"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерБаржи" NUMBER(10) NULL,

	"Производитель" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СписокКонтей"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКонтей" NUMBER(10) NULL,

	"НаимКонтей" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаимЗаказа" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ПунктПостав" NVARCHAR2(255) NULL,

	"РасСчет" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокумПоставки"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"НомерДог" NUMBER(10) NULL,

	"Клиенты" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ФормирРаспред"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерРаспред" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"СписокБарж" RAW(16) NOT NULL,

	"ДокумПоставки" RAW(16) NOT NULL,

	"СписокКонтей" RAW(16) NOT NULL,

	"ПунктПогруз" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПунктПогрузки"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаименППогр" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ФормРезПост"
	ADD CONSTRAINT "ФормРезПост_F_3791" FOREIGN KEY ("ФормирРаспред") REFERENCES "ФормирРаспред" ("primaryKey");

CREATE INDEX "ФормРезПост_I_8783" on "ФормРезПост" ("ФормирРаспред");

ALTER TABLE "ТЧИнфОЗаказе"
	ADD CONSTRAINT "ТЧИнфОЗаказе__2567" FOREIGN KEY ("Товары") REFERENCES "Товары" ("primaryKey");

CREATE INDEX "ТЧИнфОЗаказе__4148" on "ТЧИнфОЗаказе" ("Товары");

ALTER TABLE "ТЧИнфОЗаказе"
	ADD CONSTRAINT "ТЧИнфОЗаказе__7437" FOREIGN KEY ("ДокумПоставки") REFERENCES "ДокумПоставки" ("primaryKey");

CREATE INDEX "ТЧИнфОЗаказе__9180" on "ТЧИнфОЗаказе" ("ДокумПоставки");

ALTER TABLE "ДокумПоставки"
	ADD CONSTRAINT "ДокумПоставк_3550" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ДокумПоставк_9403" on "ДокумПоставки" ("Клиенты");

ALTER TABLE "ДокумПоставки"
	ADD CONSTRAINT "ДокумПоставки_982" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ДокумПоставк_2592" on "ДокумПоставки" ("Организация");

ALTER TABLE "ФормирРаспред"
	ADD CONSTRAINT "ФормирРаспре_8417" FOREIGN KEY ("СписокБарж") REFERENCES "СписокБарж" ("primaryKey");

CREATE INDEX "ФормирРаспре_7439" on "ФормирРаспред" ("СписокБарж");

ALTER TABLE "ФормирРаспред"
	ADD CONSTRAINT "ФормирРаспред_376" FOREIGN KEY ("ДокумПоставки") REFERENCES "ДокумПоставки" ("primaryKey");

CREATE INDEX "ФормирРаспре_4769" on "ФормирРаспред" ("ДокумПоставки");

ALTER TABLE "ФормирРаспред"
	ADD CONSTRAINT "ФормирРаспре_8856" FOREIGN KEY ("СписокКонтей") REFERENCES "СписокКонтей" ("primaryKey");

CREATE INDEX "ФормирРаспре_7307" on "ФормирРаспред" ("СписокКонтей");

ALTER TABLE "ФормирРаспред"
	ADD CONSTRAINT "ФормирРаспре_7051" FOREIGN KEY ("ПунктПогруз") REFERENCES "ПунктПогруз" ("primaryKey");

CREATE INDEX "ФормирРаспре_9453" on "ФормирРаспред" ("ПунктПогруз");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


