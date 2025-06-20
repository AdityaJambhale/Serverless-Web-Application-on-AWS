Serverless Web App using AWS (Lambda + DynamoDB + S3)

This is a simple serverless web app I built using AWS — no EC2, just pure serverless setup.  
In this project, you will build a serverless web application using AWS Lambda, DynamoDB, and S3. The application will allow users to create, read, update, and delete (CRUD) items from a DynamoDB table.



Project Architecture:

![228492073-5cd3d975-3439-4ce4-b109-fb33997df3c3 (1)](https://github.com/user-attachments/assets/5b1eabaa-a933-4bf7-87e2-e035d23d7d00)




---

## What’s Inside?

- **DynamoDB** → Stores the data (NoSQL table)
- **AWS Lambda** → Handles all backend logic (CRUD operations)
- **S3** → Hosts the frontend (HTML, CSS, JS)
- **CloudFront** → Delivers the site globally (fast + secure)
- **Route 53** → For custom domain setup
---

## Tech Used

- Frontend: HTML, CSS, JavaScript
- Backend: AWS Lambda (Node.js / Python)
- Database: DynamoDB
- Hosting: S3 + CloudFront

---

## Setup Steps

1. **Created a DynamoDB table** (partition key = `id`)
2. Wrote a **Lambda function** that handles all CRUD
3. Uploaded my HTML, CSS & JS to an **S3 bucket**
4. Enabled **static website hosting** on the S3 bucket
5. Set up **CloudFront** to serve the S3 content


---



## 🧠 What I Learned

- How serverless apps work on AWS
- How to connect frontend to Lambda backend
- Hosting a static site using S3 + CloudFront
- Using IAM roles for secure Lambda execution
- Basics of integrating DynamoDB


**Aditya Jambhale**  
[GitHub](https://github.com/adityajambhale)

---
