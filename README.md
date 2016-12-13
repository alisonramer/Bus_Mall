# Bus_Mall
make files
make html skelaton
defining our global variables
  - allProducts []
  -
Constructor Function
  //Think: Will it help to do this as an object?// how do I use an object // NOT should I use an object? //

  Define the Parameters / Properties
    - name
    - file path
    - position
    - click total
    - number of positions

What happens when the constructor is called? What happens during this instance?

Call the Constructor Function -> This will initialize the instances.

Event Handler
  - User click
    - Prevent default (Back)
        - if bad click
          - return alert: you suck! you need to click on an image.
        - if good click
          - tally number of times that this image was clicked for all times
            - Put the information in a chart
          - tally number of times that they have clicked images (25x max)
            - If we've reached 25 times
              - New button which will lead to a new page with a chart
              - Remove event listener

            - If we don't reach 25 times --> New Images (Front)
              - Pick three new images (that have not been picked)
              - Prevent duplicates of images in set of three
              - Prevent
              - Render or print new images
  -
