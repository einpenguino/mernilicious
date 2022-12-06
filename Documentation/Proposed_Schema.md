### Proposed Schema based on function

#### Products
- Product_ID : *unique*String
- Price : float
- Name: String
- Skin Type: List containing **only** strings (**All** must exist in skin type directory)
- Product Type : String (Must exist in product type directory)
- Skin Goal : String (Must exist in Skin goal directory)
- Description : String 
- Ingredients : List of Strings (Force lowercase)
- Active Ingredients : List of Strings (Force lowercase) **(Strings must have active ingredient as valid entry within active ingredients directory)**
- Image : gridFS obj
*- Reviews : objectID for another MongoDoc containing reviews and comments (Stretch goal)*

#### Directory
- Skin_Goal : List of Strings, used as a check to determine if additional entries are valid
- Product_Type : List of Strings, used as a check to determine if additional entries are valid
- Skin_Type : List of Strings, used as a check to determine if additional entries are valid
- User_name : List of **Hashed** Strings, used as a check to determine if additional entries are valid
- Product_ID : List of Strings, used as a check to determine if additional entries are valid
- Ingredients  : List of Strings, used as a check to determine if additional entries are valid

#### User Creds (REad up on JWT)
- User_name : *unique***HASHED**String
- PW : **Hashed**String
- DOB : **Hashed**String

#### User Profile
- User_name : *unique***HASHED**String
- Skin_type : String (Must exist in skin_type directory)
- Sensitivity : Boolean
- Skin_Goal : String (Must exis in skin_goal directory)
- RegimeID : List of Strings

#### Skin Care Regime
- RegimeID : String
- Product_Procedure_AM_Cleanser : String (must exist in Product_ID dir)
- Product_Procedure_AM_Treatment : String (must exist in Product_ID dir)
- Product_Procedure_AM_Moisturiser : String (must exist in Product_ID dir)
- Product_Procedure_AM_Sunscreen : String (must exist in Product_ID dir)
- Product_Procedure_PM_Cleanser : String (must exist in Product_ID dir)
- Product_Procedure_PM_Treatment : String (must exist in Product_ID dir)
- Product_Procedure_PM_Moisturiser : String (must exist in Product_ID dir)

#### Skin Goal Profile
- Skin_Goal : String (Must exist in Skin_Goal dir)
- Active_Ingredients : List of Strings (String val must exist within Ingredients Dir)