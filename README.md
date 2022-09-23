# eightBoxes\_v3

Link to current version: [eightBoxes\_v3](https://intr-eeg.github.io/eightBoxes_v3/)

### Data Dictionary

Variable                  | Description
:------------------------ | :--------------------------------------------------
expVersion                | experiment version (date last modified)
choices                   | participant's final answer for trial (order of fruits)
correct\_choices          | correct order of fruits
score                     | number of correct choices
errors                    | number of errors
time\_since\_start        | time taken to place all fruits in boxes, since start of trial (seconds)
time\_since\_first\_click | time taken to place all fruits in boxes, since first click on a fruit (seconds)
coords\_x                 | list of x coordinates
coords\_y                 | list of y coordinates
coords\_t                 | list of times when x and y coordinates were taken (seconds)
end\_timestamp            | timestamp at the end of each trial
total\_seconds            | cumulative time taken at the end of each trial (seconds); the time taken from when all fruits have been placed in boxes to when the 'continue' button is clicked is also included here, this should account for any discrepancy in time elapsed between trials and the sum of `time_since_start` and `reveal_seconds`
trial\_name               | trial name
reveal\_seconds           | number of seconds where fruits' positions are initially revealed to participant
n\_fruits                 | number of fruits in trial (also total score)
pos1                      | position of first fruit
pos2                      | position of second fruit
pos3                      | position of third fruit
pos4                      | position of fourth fruit
pos5                      | position of fifth fruit (not used)
pos6                      | position of sixth fruit (not used)
ID                        | subject ID
Audio                     | activate audio
Debug                     | activate debug mode



