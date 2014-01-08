sandj
=====

# Tables
* Guest
    * Name
    * Id
    * RSVP Id
    * Food Id
    * Family
    * Code
* Food
    * Id
    * Category
* RSVP
    * Id
    * Category

# Actions
* Retrieval
    * Input: confirmation code
    * Output: array of guest objects based on family ID
* Setting
    * Input: person id
    * Output: setting the database for food and RSVP attrs.
* Adding name
    * Input: person id
    * Output: setting name

# Flows
* Create
    * Type in name & confirmation code
    * Family names are returned -> able to fill RSVP status for each
    * Thank you!
* +1 Flow
    * Look for the correct RSVP status
    * "Will your sig. other be joining you?"
        * Yes, then type in name; update name and change RSVP status


# Objects
* Guest
    * Members
        * Name
        * RSVP
        * Food
        * Family
        * Id
    * Methods
        * get_data(id): returns name, rsvp, food, and family
        * set_pref(id): sets food and rsvp
        * set_name(id): sets name of +1



# To do
* +1 flow
* write story
* test if someone resets their rsvp/food
* change critter colors
* Font for Details page
* Links to registries

