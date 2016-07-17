v1.0.26
=======================================================
(july 17 2016)

In this version some form elements were updated.

- inputs & buttons now have the same paddin and border proportions
    - these can be set in the variables
- inputs now have the variable $medium-gray as their border-color
- heading size variables are added and applied to typography.scss
- radio/checkboxes are aligned with labels
- password type input added
    

v1.0.25
=======================================================
(june 17 2016)

In this version, the first significant patches were made.

- All attribute css selectors were replaced by class selectors. The following files were affected:
    - _grid.scss
    - _forms.scss
    - _flexbox.scss
    
    The changes for the user include adding an extra class to form elements for inline radio & checkboxes. 
    Also the input with a button now has an extra class.