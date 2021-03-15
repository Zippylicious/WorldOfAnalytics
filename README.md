# World of Analytics

This a personal website for John Thompson designed to be a hub for all analytics related matters.

## Local Development

You will need to clone this git repository to your local machine and have node.js installed. I am developing on node v14.15.4. 
  
From there you will need to run these commands both in /api and /client folders  
```
npm install
npm start
```
This will run both the express backend and react frontend on localhost:9000 and localhost:3000 respectively.
Unless you are a trusted developer with credentials, you will need to run your own local mongoDB instance and provide separate email credentials as this app relies on a production DB and email address.
  
## TODO

### Required for PROD launch  
Style engagements page  
Style contact page  
Style share page  
Style blog page 
Style about page  
  
Mobile view  (Focus on Books + Contact)   
  
~~Implement blog page~~  
~~Implement books page~~  
~~Implement about page~~  
~~Implement stuff I share page~~  
~~Implement engagements page~~  
~~Implement contact page~~  
  
~~Implement blog admin add~~  
Implement blog admin delete      
    
~~Implement engagements admin add~~  
Implement engagements admin delete   
  
~~Implement share admin add~~  
Implement share admin delete  
  
~~Implement about admin update~~
  
~~Implement book admin add~~  
Implement book admin delete     
  
~~Add authentication for admin functions (editing, adding (non-comments), deleting)~~  
~~Add authentication for admin page on front end~~  
~~Add login page~~  
~~Add register endpoint (no need for UI)~~
~~Add admin accounts and hide register endpoint beind auth~~      
  
~~Allow for text input to retain formatting for blog, about, etc~~  
  
~~Set up database~~  
~~Set up react~~  
~~Set up node~~  
Set up hosting under domain  
  
~~Make it so links open new page and direct towards absolute path, rather than relative~~  
~~Implement likes on share posts~~ 
Make it so like button is differently colored once disabled    
  
Design favicon  

### Not Required, but High Priority
 
Implement engagements admin edit  
Implement share admin edit   
Implement book admin edit   
Implement blog admin edit  
Allow for book sample to be user provided file rather than just Amazon embed url  
  
  
### Aspirational Goals, Low Priority
  
Fix denied POST requests from Amazon iFrame(?)  
Style admin page     
Implement image upload and display in about & books   
~~Add basic validation to prevent duplicate likes from same user~~    
Add displayed feedback for successful or failed admin action  
Add local storage to persist admin tab on reload  
  