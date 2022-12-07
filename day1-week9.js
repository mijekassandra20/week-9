// TODO 1. What is AWS EC2? 
//  - Elastic Cloud Compute allows user to build apps to automate scaling according to changing needs and peak periods.
//  - It offers scalable, secure compute capacity in the cloud. For developers, it is intended to make web-scale cloud computing simpler.

// TODO 2. What are some use cases of using AWS EC2? 
// - When you want to migrate from traditional server to serverless, EC2 is a choice where you can make a virtual server to host your app.

// TODO 3. What is AWS Lambda? 
// - Lambda is a serverless compute service that permits you to run code without controlling or provisioning servers.
// - In simple terms, it allows you to write your code without building the infrastracture.

// TODO 4. What are some use cases of using AWS Lambda? 
// - One of the cases to use Lambda is when you want to develop a web application without the need to create the endpoints, middlewares.
// - You only have to focus on what controllers have to do. Any other components needed to create the web app will be provided by AWS.

// TODO 5. How does AWS Lambda work for: 
//     a. File Processing - It uses S3 to trigger AWS Lambda data processing in real time after an upload to enable massively parallel shared access for large-scale file processing.
//     b. Web Applications - Lambda is combined with other AWS services to build powerful web applications that automatically scale up and down and run in a highlt available configurations across multiple data centers.
//     c. Stream Processing - Use AWS Lambda, to process real-time streaming data for application activity tracking and other transactions.

// TODO 6. What is S3
// - It is an object storage service offering industry-leading scalability, data availability, security and performance. 
// - It allows customers of all sizes and industries can store and protect any amount of data virtually.
// - It is different from a DB, since it only stores filebased and not the data as whole.

// TODO 7. How does S3 work?
// - Simple Storage Services works by storing data in containers called buckets. Each bucket will have its own set of policies and configurations.
// - This enables users to have more control over their data. And there is a limit of 100 buckets per AWS accounts

// TODO 8. What are some use cases of S3?
// - One of the most typical uses for Amazon S3 is backup. 
// - This guarantees that important backup files you must keep won't be lost due to human error or even a regional natural disaster.

// TODO 9. What is DynamoDB?
// - DynamoDB is a NoSql database service that provides fast and predictable performance with seamless scalability. 
// - It relieves the user from administrative burdens of operating and scaling the database since they won't have to worry about the hardware and other components needed to setup a database.
// - It also offers encryption at rest, which eliminates more burden and complexity on the user's end.

// TODO 10. How does DynamoDB work?
// - With DynamoDB, you can create database tables that can store and retrieve any amount of data and serve any level of request traffic. 
// - It's up to the costumer whether they will scale up or scale down the capactiy without downtime or performance.
// - DynamoDB also provied on demand backup capibility for your data.

// TODO 11. What are some use cases of DynamoDB?
// - One and the most common use cases of DynamoDB is in Retail Industry, where they refer the term 'time is money'.
// - DynamoDB makes sure that its customers experience the best in reliability and resiliency by providing data backups and replications to ensure no data loss in case of a disaster.

// TODO 12. What is Aurora?
// - Aurora is SQL database service offered from amazon cloud. 
// - It is built with full MySQL and PostgreSQL compatibility and it gives you the performance and availability of commercial-grade databases.

// TODO 13. How does Aurora work?
// - Built-in security, continuous backups, serverless computing, up to 15 read replicas, automated multi-Region replication,
// - and integrations with other AWS services are all features of Amazon Aurora.

// TODO 14. What are some use cases of Aurora?
// - In enterprises application that uses relational database,  When compared to commercial databases, Amazon Aurora can help users further reduce database expenditures by 90% or more while enhancing the database's dependability and availability. 
// - By automating time-consuming activities like provisioning, patching, backup, failure detection, recovery, and repair, Amazon Aurora, a fully managed service, saves users' time.

// TODO 15. What is AWS VPC?
// - A virtual private cloud (VPC) is a network that closely matches the conventional network you would run in your own data center. 
// - It gives you full control over your virtual networking environments, ex; connectivity and security. 
// - And also allows you to store your servers in private cloud.

// TODO 16. How does AWS VPC work? 
// - You can establish a virtual network in your own logically isolated part of the AWS cloud using Amazon VPC. In the subnets of your VPC, you can establish AWS resources like Amazon EC2 instances.
// - You can configure in VPC; like selecting its IP address range, create subnets, configure routes tables, network gateways, and security settings.
// - You can connect instances in your VPC to the internet or to your own data center.

// TODO 17. What are some use cases of VPC?
// - Hosting a multi-tier web application requires stricter access control and more restrictions for communication between your servers for layers, such as web servers, app servers, and database servers. 
// - VPC is an ideal solution for such web applications as it has all functionalities built in.

// TODO 18. What is API Gateway?
// - In order to construct, publish, maintain, monitor, and protect APIs at any size, developers can use the fully managed service known as Amazon API Gateway.
// - Applications use APIs as the "front door" to your backend services, giving them access to data, business logic, and functionality.

// TODO 19. How does API Gateway work?
// - Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications.
// - API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls.
// - However, you pay for the API calls you receive and the amount of data transferred out. With the API Gateway tiered pricing model, you can lower your cost as your API usage scales. 


// TODO 20. What are some use cases of API Gateway? 
// - Example is when there's integration request that is put up by the API developer to send the incoming method request to the selected backend. 
// - The configuration provides instructions for a suitable DynamoDB operation, necessary IAM roles and rules, and necessary input data transformation.
// - As an integration response, the backend sends API Gateway the outcome.

// TODO 21. What is CloudFront?
// - The web service Amazon CloudFront makes it faster for users to access your static and dynamic web content, including.html,.css,.js, and image files.
// - It's like a cache that allows you to load contents in the webpage faster.

// TODO 22. How does CloudFront?
// -Through a global network of data centers referred to as edge locations, CloudFront distributes your content. 
// - The request is routed to the edge location with the lowest latency (time delay) when a user requests content that you are providing 

// TODO 23. What are some use cases of CloudFront?
// - One and the most common example to use cloudfront is when you want to accelerate static website content delivery.
// - The delivery of your static content, such as images, style sheets, JavaScript, and other files, to users all over the world can be accelerated with the help of CloudFront.

// TODO 24. What is Cognito?
// - You can quickly add user sign-up and authentication to your mobile and online apps with Amazon Cognito.
// - The backend resources of your app can be accessed through AWS or any service behind Amazon API Gateway with the help of Amazon Cognito, which also offers temporary security credentials.

// TODO 25. How does Cognito work?
// 1. User signs in through a user pool.
// 2. Once successfully authenticated, they receive a user pool token.
// 3. The app exchanges the token for AWS credentials through an identity pool.
// 4. User can use these authenticated AWS credentials to access other services in the AWS cloud. 

// TODO 26. What are some use cases of Cognito? 
// - Amazon Cognito enables simple, secure user authentication, authorization and user management for web and mobile apps. 
// - With Cognito, a user or visitor can sign in with a username and password through Amazon, or through a third party like Facebook, Google or Apple.

// TODO 27. What is CloudWatch?
// - CloudWatch gives you actionable insights that help you optimize application performance, manage resource utilization, and understand system-wide operational health. 
// - In simple terms, it monitors what your applications are doing.

// TODO 28. How does CloudWatch work?
// - Amazon CloudWatch is basically a metrics repository. An AWS service—such as Amazon EC2—puts metrics into the repository, and you retrieve statistics based on those metrics. 
// - If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well.

// TODO 29. What are some use cases of CloudWatch?
// - Amazon CloudWatch is used by customers to gather and monitor log files, measure metrics, create alarms, and automatically respond to changes in AWS services. 
// - System-wide visibility into resource usage, application performance, and operational health is provided by CloudWatch.

// TODO 30. What is Secrets Manager?
// - With Secrets Manager, You can secure access to your applications, services, and IT resources.
// - In simplest terms, it's a secrets management service where you store secrets like keys, passwords, api keys.

// TODO 31. How does Secrets Manager work?
// - The protected secret data and the encrypted data key are both stored in Secrets Manager. 
// - When the secret has to be decrypted, Secrets Manager asks AWS KMS to unlock the data key, which it then uses to unlock the secret data that has been encrypted.

// TODO 32. What are some use cases of Secrets Manager?
// - Securely encrypt and centrally audit secrets such as database credentials and API keys.
// - Manage access to secrets using fine-grained AWS Identity and Access Management (IAM) and resource-based policies.
// - Rotate secrets automatically to meet your security and compliance requirements.
// - Replicate secrets to support disaster recovery scenarios and multi-region applications.

// TODO 33. What is CloudTrail?
// - By monitoring user behavior and API usage, CloudTrail provides audits, security monitoring, and operational troubleshooting. 
// - To give you control over storage, analysis, and corrective measures, CloudTrail records, continually monitors, and stores account activity connected to actions throughout your AWS infrastructure.

// TODO 34. How does CloudTrail work?
// - When activity occurs in your AWS account, that activity is recorded in a CloudTrail event. To view events you can go to EVENT HISTORY.
// - Event history allows you to view, search, and download the past 90 days of activity in your AWS account. 
// - You can also create a CloudTrail trail to archive, analyze, and respond to changes in your AWS resources. 
// - A trail is a configuration that enables delivery of events to an Amazon S3 bucket that you specify.

// TODO 35. What are some use cases of CloudTrail?
// - Across your AWS infrastructure, CloudTrail lets you browse, search, download, archive, examine, and react to account activity. 
// - To assist you in analyzing and taking action in response to activity in your AWS account, you may determine who or what performed whatever action, which resources were utilized, when the event occurred, and other specifics.

// TODO 36. What is CI/CD integration?
// - A CI/CD pipeline automates the process of software delivery.It helps with the safe deployment of code, testing, and the secure release of updated software. 
// - The CI/CD pipeline decreases manual errors, provides engineers feedback, and enable rapid product iterations.