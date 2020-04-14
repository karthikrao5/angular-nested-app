# Angular Nested App POC

##Steps
1. Inside of a root angular app, run the command `ng generate application %child_app_name% --routing` to create 
a new child application within the parent. This created a folder at `parentApp/projects/child_app_name`
2. You can start the child apps for testing using `ng serve --project child_app_name`
3. In order to integrate the child app with the code of the parent one, you need to inject the child app module in the
parent's app module the same way angular feature modules work.
