![court Of Arms] (/assets/courtOfArms.png)

##INTRODUCTION
###Purpose

The government ICTs Web app aims to be a system that stores, updates, deletes information on all government Management Information Systems (MIS). This information will be stored in a database and will be used to aggregate the functionality of these systems as well as provide further information about them including E-services, mobile services per Ministry, Province or Spending Agency (MPSA).
The system will allow MPSAs to submit Realtime information to SZI pertaining to information systems in use by the MPSAs.

###Scope

###Target Audience
This system is intended to be used by the ICT heads of the different MPSAs. The system could also be authorised to personnel in management positions for the different Ministries and Agencies.

<!-- ###References -->

##OVERVIEW
The ICTs web app will have a database to store data. It will comprise user views per ministry and agency. The system proposed will allow for retrieval of this information, updating and deletion of the same information.

###The Problem
Information on government Management Information Systems (MIS) is stored by each ministry only. This approach while useful presents some problems that include:

- **Data Isolation**: Information on these systems (MIS) is isolated and can only be located in these ministries or agencies. In case of data loss or data corruption this much needed data could be lost
- **Decentralised data:** Because data on these MIS is only confined to these ministries or departments the data is decentralised and has no system to centralise the data in order to allow for appropriate distribution of resources, updating of information, data consistency and more features that are desirable in organising these MISs
- **Efficiency Analysis:** These MISs existing in isolation presents the problem of determining their efficiency. It is desirable to have systems whose efficiency can be examined comparatively to other systems and draw a conclusion on the usefulness of the system based on user interaction with the system and user feedback to the system
- **Determination of Required Projects:** Currently the system is inefficient at determining which ministries and government agencies require MIS projects for development or which ministries need certain resources or infrastructure to be built, or mobile and E-services to be installed
- **Determination of Licensing Costs:** There is need for a centralised system that determines the licensing costs and other costs that each MIS requires. This information will help determine whether a system is desirable by assessing whether it is costly compared to the revenue it generates

###The Solution
The solution to the aforementioned problems is a centralised system that stores, updates, deletes and disseminates information about these MIS systems by:

- **Centralisation of Data:** It is desirable to have a system that logs all the information about these management information systems into a database. This will allow access to authorised personnel to retrieve the information of these systems easily
- **Efficient Analysis Of Systems:** By storing the information of these MIS such as registered number of users, a centralised system will effectively determine which systems comparatively are useful and essential and which systems need to be updated and improved
- **Determination of Resources Required:** A system that will determine the resources required by a ministry and infrastructure to be built to support these MIS will be essential in order to allocating resources in a timely and appropriate manner
- **Accountability:** It is important to have a system that shows which agency or developer is responsible for each MIS in order to assure management of accountability. This information will be logged into the system for quick and easy retrieval.

Due to the reasons mentioned above, management has deemed it necessary to develop a centralised system that will handle logging all the information pertaining to all the government MISs.

##SYSTEM OVERVIEW

The proposed system will have the following features:
User Interface (UI)
The UI will be designed to allow the user (ICT heads of departments) to:

- Add a MIS system to the database
- Update the MIS details
- Delete the MIS details in the database
- Propose a MIS
- Add an E-service and Mobile service to the database
- Propose an E-service and Mobile service to be developed
- Propose Infrastructure to be developed to support a MIS

###Database
The database schema will include the following tables: MIS table, Proposed MIS table, E-services table, Mobile services table, Proposed Mobile services table, Ministries/MPSAs table
The structure of these tables are as follows:
