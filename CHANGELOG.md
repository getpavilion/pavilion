v2.0.1 & v2.0.2
=======================================================
- Removed form inputs with buttons on the left and right (opinionated)
- Fixed form usability issues with :focus
- Fixed minor bugs

v2.0.0
=======================================================
(february 14 2017)

- Removed the entire flexbox module ([see issue 6](https://github.com/getpavilion/pavilion/issues/6))
- Removed most of the utilities, too bloated and not in line with the Pavilion principles.
- Removed opinionated classes like .split, .summary and dropcaps.
- Added the proper styling for links styled as buttons
- Added responsive typography
- Added modular typography calculation
- Added .center-block class to utils for centering elements easy.
- Changed reordering columns: push, pulls and offsets are now breakpoint specific instead of bleeding upward.
- Changed variables.scss: new structure and names.
- Exchanged Grunt for Gulp for speed gains
- A lot of minor fixes and changes.
- New website.

v1.0.31
=======================================================
(december 27 2016)

- Added class for full width buttons


v1.0.28 / v1.0.30
=======================================================
(november 4 2016)

In this version the flexbox utility classes had a major overhaul to reflect the flexbox layout model more
accuratly. The old flexbox utility classes will still work. For now. 
Other updates include new columns (10%, 70% and 90%) and some new form elements.

- Added new flexbox classes
- Added multi select for forms
- Added new columns (10, 70, 90)
- Updated Normalize to 5.0.0
- Updated documentation to reflect all the changes
- Fixed weird flex-column pixelrounding
- Extended the variables.scss file with more variables, more fun!


v1.0.26 / v1.0.27
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