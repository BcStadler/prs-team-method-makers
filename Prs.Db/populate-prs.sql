
USE [PrsTeamProject]
GO

DELETE FROM [dbo].[RequestLines]
GO

DELETE FROM [dbo].[Requests]
GO

DELETE FROM [dbo].[Products]
GO

DELETE FROM [dbo].[Users]
GO

DELETE FROM [dbo].[Vendors]
GO

SET IDENTITY_INSERT [dbo].[Vendors] ON
GO

    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '1',
          'BAIL-EY',
          'Bailey, Baumbach and Senger',
          '3293 State Street',
          'Considinetown',
          'ME',
          '16819',
          '2293729117',
          'support@BAIL-EY.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '2',
          'FEES-TK',
          'Feest - Kohler',
          '685 Aspen Close',
          'Evefield',
          'CA',
          '51746',
          '3800111732',
          'support@FEES-TK.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '3',
          'QUIT-ZO',
          'Quitzon - Heathcote',
          '673 Carli Springs',
          'Fort Ashleighmouth',
          'MA',
          '47065',
          '9775040034',
          'support@QUIT-ZO.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '4',
          'SPEN-CE',
          'Spencer, Gleichner and Muller',
          '85826 W 14th Street',
          'McClureside',
          'AZ',
          '30329',
          '7197332208',
          'support@SPEN-CE.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '5',
          'BATZ-AN',
          'Batz and Sons',
          '299 Cemetery Road',
          'Kshlerinville',
          'MN',
          '82428',
          '6034543202',
          'support@BATZ-AN.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '6',
          'CARR-OL',
          'Carroll, Fay and Batz',
          '850 The Lane',
          'East Kiley',
          'IN',
          '27711',
          '4337576502',
          'support@CARR-OL.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '7',
          'WEBE-RG',
          'Weber Group',
          '38498 Mariam Land',
          'Jensenchester',
          'WI',
          '38392',
          '2397947355',
          'support@WEBE-RG.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '8',
          'GRAH-AM',
          'Graham and Sons',
          '4023 State Street',
          'Port Caitlynton',
          'UT',
          '49923',
          '6563784314',
          'support@GRAH-AM.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '9',
          'GLOV-ER',
          'Glover - Kemmer',
          '3105 The Square',
          'Heathcoteside',
          'MN',
          '36400',
          '3381122318',
          'support@GLOV-ER.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '10',
          'MILL-SG',
          'Mills Group',
          '2993 Becker Circles',
          'Utica',
          'UT',
          '28720',
          '6635354539',
          'support@MILL-SG.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '11',
          'CHRI-ST',
          'Christiansen - Schmitt',
          '768 Emilio Shore',
          'New Karianeboro',
          'IN',
          '51437',
          '0428786104',
          'support@CHRI-ST.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '12',
          'WAEL-CH',
          'Waelchi and Sons',
          '575 Lowe Canyon',
          'North Johnnie',
          'KS',
          '30140',
          '5660370359',
          'support@WAEL-CH.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '13',
          'PURD-YC',
          'Purdy, Crooks and Murazik',
          '59826 Hudson Skyway',
          'Beaverton',
          'AR',
          '36240',
          '8644669643',
          'support@PURD-YC.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '14',
          'LANG-FR',
          'Lang, Franey and Zieme',
          '93053 Daugherty Pine',
          'Shanahanfurt',
          'PA',
          '18427',
          '8299142464',
          'support@LANG-FR.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '15',
          'MOHR-LL',
          'Mohr LLC',
          '90444 Zulauf Avenue',
          'North Matteo',
          'WV',
          '80109',
          '8134555087',
          'support@MOHR-LL.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '16',
          'SCHM-ID',
          'Schmidt, Lakin and Renner',
          '35188 Maria Villages',
          'Lake Brannonton',
          'MT',
          '88168',
          '4665771000',
          'support@SCHM-ID.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '17',
          'MAYE-RA',
          'Mayer and Sons',
          '5076 Altenwerth Via',
          'Port Danaside',
          'CO',
          '18294',
          '3562795638',
          'support@MAYE-RA.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '18',
          'KUHN-SW',
          'Kuhn, Swaniawski and Wolf',
          '488 Christina Harbors',
          'Lake Davon',
          'RI',
          '33696',
          '8384021545',
          'support@KUHN-SW.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '19',
          'GRAN-TL',
          'Grant LLC',
          '49085 Derwent Close',
          'Lindseyport',
          'OH',
          '55338',
          '8624863396',
          'support@GRAN-TL.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '20',
          'CART-ER',
          'Carter, Barton and Wilderman',
          '1666 Hills Fort',
          'Baton Rouge',
          'KS',
          '43316',
          '9692318980',
          'support@CART-ER.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '21',
          'CRUI-CK',
          'Cruickshank, Borer and Hane',
          '1954 Laurence View',
          'West Raoul',
          'MI',
          '48468',
          '0804384784',
          'support@CRUI-CK.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '22',
          'SCHI-MM',
          'Schimmel, Swift and Kreiger',
          '5506 Josefina Corner',
          'Konopelskihaven',
          'NC',
          '56402',
          '0603632919',
          'support@SCHI-MM.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '23',
          'SCHA-EF',
          'Schaefer Group',
          '223 Borer Causeway',
          'Oakland Park',
          'MT',
          '85064',
          '5627694624',
          'support@SCHA-EF.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '24',
          'SCHA-DE',
          'Schaden and Sons',
          '937 Clarence Street',
          'Grand Forks',
          'NJ',
          '47203',
          '2748084637',
          'support@SCHA-DE.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '25',
          'GERH-OL',
          'Gerhold LLC',
          '65428 1st Street',
          'East Queenie',
          'FL',
          '19049',
          '2931139918',
          'support@GERH-OL.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '26',
          'ERDM-AN',
          'Erdman, Miller and Wiegand',
          '102 Robel Throughway',
          'Boca Raton',
          'ND',
          '47389',
          '9246590327',
          'support@ERDM-AN.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '27',
          'ABER-NA',
          'Abernathy - Nicolas',
          '321 Kasandra Trafficway',
          'Simonecester',
          'UT',
          '94336',
          '3717756187',
          'support@ABER-NA.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '28',
          'LUET-TG',
          'Luettgen - Beier',
          '5582 Nader Orchard',
          'Keshawnland',
          'CT',
          '27068',
          '9564233470',
          'support@LUET-TG.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '29',
          'FUNK-GR',
          'Funk Group',
          '510 Windmill Lane',
          'Lebsackworth',
          'IL',
          '39347',
          '2367116178',
          'support@FUNK-GR.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '30',
          'KSHL-ER',
          'Kshlerin, Halvorson and Schme',
          '2082 Corine Junctions',
          'Roanoke',
          'VT',
          '42434',
          '8594925097',
          'support@KSHL-ER.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '31',
          'FRAM-ID',
          'Frami - Dietrich',
          '8333 Grange Avenue',
          'League City',
          'KS',
          '47086',
          '2212516278',
          'support@FRAM-ID.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '32',
          'PFAN-NE',
          'Pfannerstill - Muller',
          '13670 Hickle Parkway',
          'Predovicfort',
          'IA',
          '83461',
          '7236554436',
          'support@PFAN-NE.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '33',
          'HEGM-AN',
          'Hegmann LLC',
          '20481 Predovic Court',
          'Cleveland',
          'WV',
          '82527',
          '1627081883',
          'support@HEGM-AN.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '34',
          'HAYE-SG',
          'Hayes Group',
          '829 Franecki Street',
          'Jerdefield',
          'TN',
          '09671',
          '1413615943',
          'support@HAYE-SG.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '35',
          'REIC-HE',
          'Reichel and Sons',
          '8632 5th Avenue',
          'Fort Paulinestad',
          'NH',
          '73699',
          '4798470136',
          'support@REIC-HE.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '36',
          'KUNZ-EG',
          'Kunze Group',
          '562 Renee Drive',
          'Fort Tobystead',
          'NE',
          '06102',
          '6983815985',
          'support@KUNZ-EG.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '37',
          'HERM-AN',
          'Hermann, Runte and Legros',
          '61410 Pound Lane',
          'Turcottestad',
          'NC',
          '73027',
          '5802914678',
          'support@HERM-AN.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '38',
          'WOLF-FW',
          'Wolff - White',
          '3041 Sycamore Close',
          'East Vitoton',
          'HI',
          '46126',
          '7192005334',
          'support@WOLF-FW.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '39',
          'BUCK-RI',
          'Buckridge, Satterfield and An',
          '7558 Kadin Flat',
          'North Peyton',
          'IL',
          '73895',
          '4092270122',
          'support@BUCK-RI.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '40',
          'SIMO-NI',
          'Simonis - Braun',
          '688 Ankunding Mountain',
          'Davisland',
          'AL',
          '82154',
          '2926070811',
          'support@SIMO-NI.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '41',
          'GISL-AS',
          'Gislason Group',
          '76939 Rectory Lane',
          'North Lera',
          'MT',
          '44613',
          '8877148635',
          'support@GISL-AS.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '42',
          'BORE-RG',
          'Borer - Gutmann',
          '368 Feil Point',
          'New Addiebury',
          'AR',
          '74231',
          '1522630554',
          'support@BORE-RG.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '43',
          'GREE-NF',
          'Greenfelder - Boehm',
          '901 Lonnie Forest',
          'Lake Josiah',
          'UT',
          '21841',
          '6710484772',
          'support@GREE-NF.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '44',
          'BINS-BE',
          'Bins, Bergnaum and Ruecker',
          '85433 Jaskolski Junctions',
          'South Kaden',
          'TX',
          '43794',
          '4582593224',
          'support@BINS-BE.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '45',
          'LARK-IN',
          'Larkin Inc',
          '7488 Abbey Road',
          'West Katelynn',
          'NJ',
          '27352',
          '2080003153',
          'support@LARK-IN.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '46',
          'WISO-ZK',
          'Wisozk Group',
          '258 Elmo Way',
          'Folsom',
          'ND',
          '44749',
          '3578520233',
          'support@WISO-ZK.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '47',
          'WALS-HB',
          'Walsh - Balistreri',
          '69146 Sanford Plaza',
          'O''Konland',
          'WV',
          '09912',
          '4958323717',
          'support@WALS-HB.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '48',
          'PARK-ER',
          'Parker, Lakin and Kshlerin',
          '6101 Forest Avenue',
          'Kshlerinmouth',
          'IL',
          '13493',
          '1782943981',
          'support@PARK-ER.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '49',
          'HODK-IE',
          'Hodkiewicz - Mayert',
          '822 Karley Ford',
          'New Idellville',
          'IN',
          '63714',
          '2910167488',
          'support@HODK-IE.com'
          )

  
    INSERT INTO [dbo].[Vendors]
              ([id]
              ,[Code]
              ,[Name]
              ,[Address]
              ,[City]
              ,[State]
              ,[Zip]
              ,[Phone]
              ,[Email])
        VALUES
              (
          '50',
          'SCHU-LI',
          'Schulist LLC',
          '1216 Kertzmann Extensions',
          'Jeffersonville',
          'OK',
          '45087',
          '8575247976',
          'support@SCHU-LI.com'
          )

  
GO

SET IDENTITY_INSERT [dbo].[Vendors] OFF
GO

SET IDENTITY_INSERT [dbo].[Products] ON
GO

    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (1
    ,'978-0-632-08712-9'
           ,'Oriental Silk Keyboard'
           ,'41.09'
           ,'Each'
           , null
           ,'18')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (2
    ,'978-1-136-36203-3'
           ,'Electronic Steel Pants'
           ,'93.39'
           ,'Pair'
           , null
           ,'17')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (3
    ,'978-1-317-46549-2'
           ,'Oriental Concrete Bike'
           ,'13.29'
           ,'Dozen'
           , null
           ,'4')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (4
    ,'978-1-02-613261-6'
           ,'Sleek Wooden Computer'
           ,'69.49'
           ,'Each'
           , null
           ,'21')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (5
    ,'978-1-06-844569-9'
           ,'Luxurious Plastic Pizza'
           ,'61.49'
           ,'Box'
           , null
           ,'29')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (6
    ,'978-0-8475-7898-6'
           ,'Practical Bamboo Soap'
           ,'7.85'
           ,'Dozen'
           , null
           ,'23')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (7
    ,'978-1-297-57352-1'
           ,'Sleek Wooden Pizza'
           ,'57.97'
           ,'Each'
           , null
           ,'41')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (8
    ,'978-1-4365-3386-7'
           ,'Luxurious Metal Gloves'
           ,'71.59'
           ,'Box'
           , null
           ,'33')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (9
    ,'978-0-593-44830-4'
           ,'Gorgeous Aluminum Soap'
           ,'46.39'
           ,'Pair'
           , null
           ,'10')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (10
    ,'978-1-281-55413-0'
           ,'Electronic Marble Computer'
           ,'55.65'
           ,'Dozen'
           , null
           ,'15')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (11
    ,'978-1-81030-233-1'
           ,'Handcrafted Granite Shoes'
           ,'57.69'
           ,'Pack'
           , null
           ,'3')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (12
    ,'978-1-7229-1941-2'
           ,'Soft Plastic Shirt'
           ,'28.49'
           ,'Box'
           , null
           ,'37')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (13
    ,'978-1-260-64289-6'
           ,'Rustic Aluminum Towels'
           ,'42.19'
           ,'Box'
           , null
           ,'42')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (14
    ,'978-0-911093-00-1'
           ,'Intelligent Silk Keyboard'
           ,'61.99'
           ,'Pack'
           , null
           ,'31')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (15
    ,'978-1-7217-7780-8'
           ,'Frozen Ceramic Hat'
           ,'29.05'
           ,'Box'
           , null
           ,'28')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (16
    ,'978-0-693-43672-0'
           ,'Recycled Gold Fish'
           ,'35.54'
           ,'Pair'
           , null
           ,'2')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (17
    ,'978-0-646-88915-3'
           ,'Oriental Granite Soap'
           ,'9.45'
           ,'Set'
           , null
           ,'24')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (18
    ,'978-1-4367-8610-2'
           ,'Practical Aluminum Pants'
           ,'53.80'
           ,'Pack'
           , null
           ,'44')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (19
    ,'978-1-4135-0326-5'
           ,'Handmade Ceramic Cheese'
           ,'80.25'
           ,'Set'
           , null
           ,'9')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (20
    ,'978-0-310-10691-3'
           ,'Refined Ceramic Chips'
           ,'11.55'
           ,'Pack'
           , null
           ,'4')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (21
    ,'978-0-321-95190-8'
           ,'Unbranded Ceramic Hat'
           ,'39.09'
           ,'Case'
           , null
           ,'7')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (22
    ,'978-1-4005-7321-9'
           ,'Ergonomic Cotton Salad'
           ,'39.39'
           ,'Box'
           , null
           ,'3')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (23
    ,'978-1-4050-4146-1'
           ,'Oriental Ceramic Shirt'
           ,'96.15'
           ,'Dozen'
           , null
           ,'7')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (24
    ,'978-1-045-32592-1'
           ,'Elegant Metal Salad'
           ,'52.89'
           ,'Case'
           , null
           ,'17')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (25
    ,'978-1-945732-51-5'
           ,'Gorgeous Aluminum Table'
           ,'83.97'
           ,'Case'
           , null
           ,'15')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (26
    ,'978-1-78181-923-4'
           ,'Handcrafted Aluminum Soap'
           ,'86.15'
           ,'Pair'
           , null
           ,'23')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (27
    ,'978-0-900037-02-3'
           ,'Handcrafted Granite Mouse'
           ,'21.95'
           ,'Set'
           , null
           ,'8')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (28
    ,'978-1-4938-0619-5'
           ,'Tasty Ceramic Soap'
           ,'91.59'
           ,'Box'
           , null
           ,'48')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (29
    ,'978-0-8027-9247-1'
           ,'Electronic Bronze Car'
           ,'11.00'
           ,'Pair'
           , null
           ,'30')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (30
    ,'978-0-15-018189-7'
           ,'Oriental Rubber Chicken'
           ,'50.59'
           ,'Each'
           , null
           ,'1')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (31
    ,'978-0-231-05388-4'
           ,'Elegant Gold Chips'
           ,'45.90'
           ,'Dozen'
           , null
           ,'36')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (32
    ,'978-1-114-91830-6'
           ,'Soft Silk Soap'
           ,'81.79'
           ,'Pack'
           , null
           ,'20')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (33
    ,'978-1-258-27764-2'
           ,'Modern Granite Soap'
           ,'17.80'
           ,'Set'
           , null
           ,'13')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (34
    ,'978-0-09-295122-0'
           ,'Elegant Steel Shirt'
           ,'95.89'
           ,'Box'
           , null
           ,'3')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (35
    ,'978-0-526-04023-0'
           ,'Tasty Aluminum Tuna'
           ,'29.39'
           ,'Pair'
           , null
           ,'10')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (36
    ,'978-1-315-10868-1'
           ,'Fantastic Silk Chips'
           ,'63.09'
           ,'Pack'
           , null
           ,'48')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (37
    ,'978-1-60241-065-7'
           ,'Intelligent Aluminum Ball'
           ,'96.19'
           ,'Box'
           , null
           ,'35')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (38
    ,'978-0-8352-5956-9'
           ,'Recycled Cotton Chicken'
           ,'20.69'
           ,'Pack'
           , null
           ,'27')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (39
    ,'978-1-350-58194-4'
           ,'Soft Plastic Cheese'
           ,'88.17'
           ,'Each'
           , null
           ,'11')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (40
    ,'978-0-346-83302-9'
           ,'Small Cotton Salad'
           ,'67.29'
           ,'Set'
           , null
           ,'26')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (41
    ,'978-0-570-37825-9'
           ,'Fresh Aluminum Bike'
           ,'94.95'
           ,'Case'
           , null
           ,'13')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (42
    ,'978-1-133-36475-7'
           ,'Modern Plastic Shirt'
           ,'53.55'
           ,'Box'
           , null
           ,'21')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (43
    ,'978-1-348-23052-6'
           ,'Handmade Silk Gloves'
           ,'66.99'
           ,'Pair'
           , null
           ,'2')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (44
    ,'978-0-635-04088-6'
           ,'Tasty Silk Table'
           ,'55.85'
           ,'Dozen'
           , null
           ,'35')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (45
    ,'978-1-6880-8389-9'
           ,'Handmade Rubber Soap'
           ,'37.09'
           ,'Pack'
           , null
           ,'39')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (46
    ,'978-1-7076-1523-0'
           ,'Refined Bamboo Bacon'
           ,'49.15'
           ,'Pair'
           , null
           ,'45')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (47
    ,'978-1-7944-9669-9'
           ,'Fresh Rubber Fish'
           ,'48.65'
           ,'Dozen'
           , null
           ,'36')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (48
    ,'978-0-371-16848-6'
           ,'Generic Silk Pizza'
           ,'27.49'
           ,'Pair'
           , null
           ,'4')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (49
    ,'978-1-925152-23-4'
           ,'Frozen Bronze Keyboard'
           ,'56.80'
           ,'Pair'
           , null
           ,'42')
  
    INSERT INTO [dbo].[Products]
    ([Id]
    ,[PartNumber]
           ,[Name]
           ,[Price]
           ,[Unit]
           ,[PhotoPath]
           ,[VendorId])
VALUES
    (50
    ,'978-1-002-65176-6'
           ,'Refined Marble Shoes'
           ,'11.19'
           ,'Each'
           , null
           ,'33')
  
GO

SET IDENTITY_INSERT [dbo].[Products] OFF
GO

SET IDENTITY_INSERT [dbo].[Users] ON
GO

INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (1
    ,'torrey.schoen'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Torrey'
    ,'Schoen'
    ,'3039653180'
    ,'torrey.schoen@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (2
    ,'hope.hodkiewicz28'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Hope'
    ,'Hodkiewicz'
    ,'5277539263'
    ,'hope.hodkiewicz28@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (3
    ,'alexandre.anderson'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Alexandre'
    ,'Anderson'
    ,'4566045257'
    ,'alexandre.anderson@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (4
    ,'lyda_rolfson'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Lyda'
    ,'Rolfson'
    ,'4807904682'
    ,'lyda_rolfson@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (5
    ,'may.stracke79'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'May'
    ,'Stracke'
    ,'6072171612'
    ,'may.stracke79@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (6
    ,'melisa.king-okon'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Melisa'
    ,'King-O''Kon'
    ,'5618817435'
    ,'melisa.king-okon@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (7
    ,'myrtis.ferry-turcotte17'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Myrtis'
    ,'Ferry-Turcotte'
    ,'3675343017'
    ,'myrtis.ferry-turcotte17@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (8
    ,'randal.boyer'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Randal'
    ,'Boyer'
    ,'1716331775'
    ,'randal.boyer@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (9
    ,'haskell.ondricka96'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Haskell'
    ,'Ondricka'
    ,'5893529595'
    ,'haskell.ondricka96@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (10
    ,'jayme.okon14'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Jayme'
    ,'O''Kon'
    ,'4076258764'
    ,'jayme.okon14@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (11
    ,'bernadine.schamberger'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Bernadine'
    ,'Schamberger'
    ,'8432743703'
    ,'bernadine.schamberger@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (12
    ,'santino.satterfield'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Santino'
    ,'Satterfield'
    ,'3575317170'
    ,'santino.satterfield@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (13
    ,'ashlynn_howell'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Ashlynn'
    ,'Howell'
    ,'1712667060'
    ,'ashlynn_howell@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (14
    ,'dana_hand'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Dana'
    ,'Hand'
    ,'0804607826'
    ,'dana_hand@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (15
    ,'toy.morar'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Toy'
    ,'Morar'
    ,'5022053173'
    ,'toy.morar@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (16
    ,'vella_stracke84'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Vella'
    ,'Stracke'
    ,'0510278353'
    ,'vella_stracke84@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (17
    ,'norwood_zieme'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Norwood'
    ,'Zieme'
    ,'4660614041'
    ,'norwood_zieme@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (18
    ,'lorenz.sanford'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Lorenz'
    ,'Sanford'
    ,'2327676230'
    ,'lorenz.sanford@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (19
    ,'freddy_hilll'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Freddy'
    ,'Hilll'
    ,'1809098076'
    ,'freddy_hilll@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (20
    ,'maribel.lindgren'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Maribel'
    ,'Lindgren'
    ,'9130277586'
    ,'maribel.lindgren@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (21
    ,'carey_simonis33'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Carey'
    ,'Simonis'
    ,'2261758762'
    ,'carey_simonis33@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (22
    ,'hunter.metz'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Hunter'
    ,'Metz'
    ,'4461180397'
    ,'hunter.metz@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (23
    ,'liana.goldner'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Liana'
    ,'Goldner'
    ,'5853333574'
    ,'liana.goldner@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (24
    ,'everett.beatty'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Everett'
    ,'Beatty'
    ,'2222959888'
    ,'everett.beatty@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (25
    ,'presley.champlin-daniel3'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Presley'
    ,'Champlin-Daniel'
    ,'7368252320'
    ,'presley.champlin-daniel3@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (26
    ,'priscilla_thompson82'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Priscilla'
    ,'Thompson'
    ,'2548206124'
    ,'priscilla_thompson82@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (27
    ,'asa_oberbrunner'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Asa'
    ,'Oberbrunner'
    ,'7897219265'
    ,'asa_oberbrunner@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (28
    ,'clemmie_luettgen-swaniawski15'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Clemmie'
    ,'Luettgen-Swaniawski'
    ,'7804011337'
    ,'clemmie_luettgen-swaniawski15@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (29
    ,'jaylan_murray20'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Jaylan'
    ,'Murray'
    ,'5197226251'
    ,'jaylan_murray20@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (30
    ,'nels_schowalter'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Nels'
    ,'Schowalter'
    ,'8225277579'
    ,'nels_schowalter@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (31
    ,'georgiana.bruen-hettinger'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Georgiana'
    ,'Bruen-Hettinger'
    ,'2812452905'
    ,'georgiana.bruen-hettinger@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (32
    ,'minerva_waelchi'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Minerva'
    ,'Waelchi'
    ,'0690910934'
    ,'minerva_waelchi@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (33
    ,'favian_hills24'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Favian'
    ,'Hills'
    ,'0326251334'
    ,'favian_hills24@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (34
    ,'danyka.smith'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Danyka'
    ,'Smith'
    ,'1105568128'
    ,'danyka.smith@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (35
    ,'edwardo_kuvalis'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Edwardo'
    ,'Kuvalis'
    ,'4207025350'
    ,'edwardo_kuvalis@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (36
    ,'dixie.baumbach30'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Dixie'
    ,'Baumbach'
    ,'9067387820'
    ,'dixie.baumbach30@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (37
    ,'ole_kunde'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Ole'
    ,'Kunde'
    ,'7061618146'
    ,'ole_kunde@example.com'
    ,0
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (38
    ,'kariane.ohara'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Kariane'
    ,'O''Hara'
    ,'4016465282'
    ,'kariane.ohara@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (39
    ,'elmer_ortiz'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Elmer'
    ,'Ortiz'
    ,'8487834901'
    ,'elmer_ortiz@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (40
    ,'mack_murphy17'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Mack'
    ,'Murphy'
    ,'6322510809'
    ,'mack_murphy17@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (41
    ,'dana.carroll'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Dana'
    ,'Carroll'
    ,'4215378382'
    ,'dana.carroll@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (42
    ,'hudson_legros'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Hudson'
    ,'Legros'
    ,'5458852204'
    ,'hudson_legros@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (43
    ,'marion.gutmann'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Marion'
    ,'Gutmann'
    ,'0835691498'
    ,'marion.gutmann@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (44
    ,'braeden_nikolaus'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Braeden'
    ,'Nikolaus'
    ,'1573838189'
    ,'braeden_nikolaus@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (45
    ,'tracy.hodkiewicz4'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Tracy'
    ,'Hodkiewicz'
    ,'5732740288'
    ,'tracy.hodkiewicz4@example.com'
    ,0
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (46
    ,'kenna_fisher'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Kenna'
    ,'Fisher'
    ,'8408553154'
    ,'kenna_fisher@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (47
    ,'julia.armstrong16'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Julia'
    ,'Armstrong'
    ,'2274991855'
    ,'julia.armstrong16@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (48
    ,'lamont.welch'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Lamont'
    ,'Welch'
    ,'8752425086'
    ,'lamont.welch@example.com'
    ,1
    ,1)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (49
    ,'hettie.hickle-welch'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Hettie'
    ,'Hickle-Welch'
    ,'7954774289'
    ,'hettie.hickle-welch@example.com'
    ,1
    ,0)
  
INSERT INTO [dbo].[Users]
    ([Id]
    ,[Username]
    ,[Password]
    ,[FirstName]
    ,[LastName]
    ,[Phone]
    ,[Email]
    ,[IsReviewer]
    ,[IsAdmin])
VALUES
    (50
    ,'leonardo_goodwin'
    ,'$2a$11$gPJJsroTfOFOyThpMTqctu8TIjSKNbjKG0f.Hlw/4xggmy8VS1cMa'
    ,'Leonardo'
    ,'Goodwin'
    ,'4025702739'
    ,'leonardo_goodwin@example.com'
    ,0
    ,0)
  
GO

SET IDENTITY_INSERT [dbo].[Users] OFF
GO

-- Requests + RequestLines (sample transactional data, ids 1-8).
-- Owner ids are looked up by name so they stay correct regardless of Users seed order.
SET IDENTITY_INSERT [dbo].[Requests] ON;

DECLARE @torreyId INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Torrey'    AND [LastName] = 'Schoen');
DECLARE @hopeId   INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Hope'      AND [LastName] = 'Hodkiewicz');
DECLARE @alexId   INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Alexandre' AND [LastName] = 'Anderson');
DECLARE @lydaId   INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Lyda'      AND [LastName] = 'Rolfson');
DECLARE @mayId    INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'May'       AND [LastName] = 'Stracke');
DECLARE @melisaId INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Melisa'    AND [LastName] = 'King-O''Kon');
DECLARE @myrtisId INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Myrtis'    AND [LastName] = 'Ferry-Turcotte');
DECLARE @randalId INT = (SELECT MIN([Id]) FROM [dbo].[Users] WHERE [FirstName] = 'Randal'    AND [LastName] = 'Boyer');

INSERT INTO [dbo].[Requests]
    ([Id],[Description],[Justification],[RejectionReason],[DeliveryMode],[Status],[Total],[UserId])
VALUES
     (1, 'Replace office chairs',      'Current chairs are broken and unsafe',       NULL,                                                     'Delivery',           'NEW',      0, @torreyId)
    ,(2, 'New laptop for design team', 'Existing laptop fails hardware diagnostics',  NULL,                                                     'Pickup',             'REVIEW',   0, @hopeId)
    ,(3, 'Break room coffee supplies', 'Team ran out of coffee and filters',          NULL,                                                     'Delivery',           'APPROVED', 0, @alexId)
    ,(4, 'Replacement monitor',        'Monitor flickers during video calls',         'A comparable monitor is already available in inventory', 'Signature Delivery', 'REJECTED', 0, @lydaId)
    ,(5, 'Warehouse safety gloves',    'OSHA compliance for new hires',               NULL,                                                     'Pickup',             'NEW',      0, @mayId)
    ,(6, 'Conference room whiteboard', 'Whiteboard cracked beyond use',               NULL,                                                     'Delivery',           'REVIEW',   0, @melisaId)
    ,(7, 'Shipping boxes',             'Restock packaging for outgoing orders',       NULL,                                                     'Pickup',             'APPROVED', 0, @myrtisId)
    ,(8, 'Ergonomic keyboard',         'RSI accommodation request',                   NULL,                                                     'Signature Delivery', 'NEW',      0, @randalId);

SET IDENTITY_INSERT [dbo].[Requests] OFF;
GO

SET IDENTITY_INSERT [dbo].[RequestLines] ON;

INSERT INTO [dbo].[RequestLines]
    ([Id],[Quantity],[RequestId],[ProductId])
VALUES
     (1,  4, 1, 1)
    ,(2,  1, 1, 2)
    ,(3,  1, 2, 3)
    ,(4,  2, 2, 4)
    ,(5,  3, 3, 5)
    ,(6,  1, 4, 6)
    ,(7,  2, 5, 7)
    ,(8,  2, 5, 8)
    ,(9,  2, 6, 9)
    ,(10, 4, 6, 10)
    ,(11, 5, 7, 11)
    ,(12, 1, 8, 12)
    ,(13, 2, 8, 1);

SET IDENTITY_INSERT [dbo].[RequestLines] OFF;
GO

-- Recalculate each request total from its line items (Quantity * Product price)
UPDATE [dbo].[Requests]
SET [Total] = ISNULL((
    SELECT SUM(rl.[Quantity] * p.[Price])
    FROM [dbo].[RequestLines] rl
    JOIN [dbo].[Products] p ON rl.[ProductId] = p.[Id]
    WHERE rl.[RequestId] = [dbo].[Requests].[Id]
), 0)
GO

-- ---------------------------------------------------------------------------
-- Team development block — additional seed data.
--
-- The data above is uniformly complete: every user and vendor has every contact
-- field filled in, no free-text value contains a comma, and no request has more
-- than two line items. Real data is not that tidy. These statements introduce
-- the gaps and edge cases the application has to cope with.
-- ---------------------------------------------------------------------------

-- A user with no phone number on file.
UPDATE [dbo].[Users]   SET [Phone] = NULL WHERE [Id] = 23;

-- Two vendors with an incomplete contact record: one has a blank phone, the
-- other has no email at all.
UPDATE [dbo].[Vendors] SET [Phone] = '' WHERE [Id] = 7;
UPDATE [dbo].[Vendors] SET [Email] = NULL WHERE [Id] = 8;

-- A justification containing commas.
UPDATE [dbo].[Requests]
SET [Justification] = 'Current chairs are broken, unsafe, and out of warranty'
WHERE [Id] = 1;

-- A round-priced product. Every seeded price is an awkward number, so no
-- combination of line items lands on a whole-dollar total.
INSERT INTO [dbo].[Products] ([PartNumber],[Name],[Price],[Unit],[PhotoPath],[VendorId])
VALUES ('978-0-149-30250-0', 'Handmade Steel Stool', 25.00, 'Each', null, 1);

-- A third line item on request 1, so at least one request has more than two.
INSERT INTO [dbo].[RequestLines] ([Quantity],[RequestId],[ProductId])
VALUES (1, 1, 13);

-- The recalculation above has already run by this point, so redo it for the
-- one request whose lines just changed.
UPDATE [dbo].[Requests]
SET [Total] = (SELECT SUM(rl.[Quantity] * p.[Price])
               FROM [dbo].[RequestLines] rl
               JOIN [dbo].[Products] p ON rl.[ProductId] = p.[Id]
               WHERE rl.[RequestId] = 1)
WHERE [Id] = 1;
GO