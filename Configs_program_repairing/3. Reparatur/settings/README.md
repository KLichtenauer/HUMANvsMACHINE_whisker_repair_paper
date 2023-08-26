Contains `*.ini` files (experiment settings) that govern how the experiment
will be conducted. You must invoke the [prepare_experiment.py](../prepare_experiment.py)
script with one of these `*.ini` files as argument.

Usually, we have one `*.ini` file per Whisker execution mode,
e.g., for generating tests ([generate_tests.ini](generate_tests.ini)),
running tests ([execute_tests.ini](execute_tests.ini)), and repairing programs.

Every settings file must contain three sections:
- `EXPERIMENT`: general settings
- `WHISKER`: which revision of whisker to use
- `SLURM`: cluster resource requirements

There are certain keys (such as `reps`, `tag` and `array_task_throttle`) that must
always be present. (And the `prepare_experiment.py` script will yell at you if you
missed one.) But every settings file can also define its own additional keys if
necessary.

The `EXPERIMENT` section also specifies a `template`, which is a Bash script that
tells how to run Whisker. Each Whisker mode usually defines its own template
because the invocation of Whisker and command line parameters slightly differ
for each Whisker mode. The templates are located in the [templates](../templates/)
folder.
