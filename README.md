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
* account for code not found
* +1 flow

- details.html
    - Add simple fade to images & text
    - Tie the canvas to the carousel
    - Add a timer to advance the carousel
    - Style the arrows
        - Vertically center
        - Make them a less terrible color
    - Position the text farther from the images
