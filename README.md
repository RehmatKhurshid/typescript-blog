steps to setup express with typescript

-  npm -init
-  npm install express mongoose typescript ts-node-dev @types/node @types/express @types/mongoose zod
-  tsc --init 
-  change root and outDir
-  create script in package.json ("start" : "ts-node-dev --respawn --transpile-only src/app.ts")
-  validation using zod package

28 may 2024

- explore services directory, all db query logic moved to services.
- refactored controllers (only business logic is there)
- type folder (contain intefaces/types)
- partial validation of patch requests

Today Tasks
- expand userSchema with firstName, lastName, profilePic (use multer).            
- create blog schema (imageUrl), implement with multer.                              
- implement jwt                                                                    
- crud in blog (restricted routes)
- zod validation

Tommorrow
- PrismaDB with typescript (ORM)
- graph QL



#   t y p e s c r i p t - b l o g 
 
 