# Building fine-grained authorization using Amazon Cognito User Pools groups

**This Angular.js application** is a reference web app that allows users to explore the use of groups in Amazon Cognito User Pools, together with Amazon Cognito Federated Identities identity pools, to obtain temporary IAM credentials in your web app.
The IAM credentials map to privileges that a user obtains after successfully authenticating with a user pool. Those privileges are determined by the role that is mapped to the user pool group that the user belongs to.
User pools provide flexibility. You can use them to implement granular authorization architectures for authenticated users.
The project code is released under the Apache 2.0 license.
Please feel free to make use of the code in this project, and spread the word.
We hope you enjoy it, and we certainly welcome all feedback, pull requests and other contributions!


## Architecture diagram
![Amazon Cognito Authentication flow](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2017/07/19/CognitoDiagram.png)