Vue.createApp({
    methods: {
        addExercise(exercise) {
            if(localStorage.length == 10){return}
            this.storageCounterExercise();
            if (this.sets && this.reps != '') {
                let exerciseObject = {
                    exerciseText: exercise.text,
                    exerciseMuscleType: exercise.muscleType,
                    exerciseMuscle: exercise.muscle,
                    exerciseIconUrl: exercise.iconUrl,
                    exerciseTips: exercise.tips,
                    exerciseSets: this.sets,
                    exerciseReps: this.reps,
                    exerciseID: this.exerciseIdCounter
                };
                localStorage.setItem('addedExercises_' + exerciseObject.exerciseID, JSON.stringify(exerciseObject));
                this.updateList();
                this.resetRepsSets();
            }
            else {
                return
            }
        },
        resetRepsSets(){
            this.sets = ''
            this.reps = ''
            let selectedSetsReps = this.$refs.selectedSetsReps
            for(i = 0; i < selectedSetsReps.length; i++){
                selectedSetsReps[i].value = 'none'
            }
        },
        removeExercise(exercise){
            localStorage.removeItem('addedExercises_' + exercise.exerciseID)
            this.updateList()
        },
        resetExercises(){
            localStorage.clear();
            this.updateList()
        },
        storageCounterExercise(){
            if(localStorage.length == 0){return}
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = JSON.parse(localStorage.getItem(key));
                if(value.exerciseID > this.exerciseIdCounter){
                    this.exerciseIdCounter = value.exerciseID
                }
              }
              this.exerciseIdCounter++
        },
        exerciseList() {
            return this.exercises.filter((exercise) => exercise.muscleType == this.muscleGroup);
        },
        updateList(){
            this.myWorkout = [];
            this.resetSelectedMuscleCount()
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = JSON.parse(localStorage.getItem(key));
                this.myWorkout.push(value);
                this.countSelectedMuscle(value)
              }
        },
        myWorkoutList() {
            this.updateList()
            return this.myWorkout
        },
        amountText(){
            let count = localStorage.length;
            if (count === 1) {
                return count + ' exercise';
            }
            else {
                return count + ' exercises';
            }
        },
        selectSets(event){
            this.sets = event.target.value
        },
        selectReps(event){
            this.reps = event.target.value
        },
        countSelectedMuscle(exercise){
            if(exercise.exerciseMuscleType == 'Chest'){this.chestAmount += 10};
            if(exercise.exerciseMuscleType == 'Back'){this.backAmount += 10};
            if(exercise.exerciseMuscleType == 'Shoulder'){this.shoulderAmount += 10};
            if(exercise.exerciseMuscleType == 'Arms'){this.armsAmount += 10};
            if(exercise.exerciseMuscleType == 'Abs'){this.absAmount += 10};
            if(exercise.exerciseMuscleType == 'Legs'){this.legsAmount += 10};
        },
        resetSelectedMuscleCount(){
            this.chestAmount = 2
            this.backAmount = 2
            this.shoulderAmount = 2
            this.armsAmount = 2
            this.absAmount = 2
            this.legsAmount = 2
        },
        getYValue(muscle){
            if(muscle == 'Chest'){return 111 - this.chestAmount}
            if(muscle == 'Back'){return 111 - this.backAmount}
            if(muscle == 'Shoulder'){return 111 - this.shoulderAmount}
            if(muscle == 'Arms'){return 111 - this.armsAmount}
            if(muscle == 'Abs'){return 111 - this.absAmount}
            if(muscle == 'Legs'){return 111 - this.legsAmount}
            return
        }
    },
    data() {
        return {
            amount: 0,
            exerciseIdCounter: 0,
            chestAmount: 2,
            backAmount: 2,
            shoulderAmount: 2,
            armsAmount: 2,
            absAmount: 2,
            legsAmount: 2,
            sets: '',
            reps: '',
            muscleGroup: '',
            myWorkout: [
            ],
            exercises: [
                {
                    text: 'Barbell Curl',
                    muscleType: 'Arms',
                    muscle: 'Bicep',
                    iconUrl: 'img/arms.png',
                    tips: 'If you have to swing at the hips to lift the weight, its too heavy.',
                },
                {
                    text: 'Cable Extension',
                    muscleType: 'Arms',
                    muscle: 'Triceps',
                    iconUrl: 'img/arms.png',
                    tips: 'Keeping your upper body straight, pull the bar down so that your arms reach a 90-degree angle.',
                },
                {
                    text: 'Hammer Curl',
                    muscleType: 'Arms',
                    muscle: 'Bicep',
                    iconUrl: 'img/arms.png',
                    tips: 'Bend at the elbow, lifting the lower arms to pull the weights toward the shoulders. Your upper arms are stationary and the wrists are in line with the forearms.',
                },
                {
                    text: 'Skull Crusher',
                    muscleType: 'Arms',
                    muscle: 'Triceps',
                    iconUrl: 'img/arms.png',
                    tips: 'As you move the weight, keep your shoulder joint stable, your elbows narrow, and your wrists straight.',
                },
                {
                    text: 'Reverse Curl',
                    muscleType: 'Arms',
                    muscle: 'Flexor',
                    iconUrl: 'img/arms.png',
                    tips: 'Hold a pair of dumbbells or EZ-curl bar with a pronated grip (palms facing away from your body and toward the floor).',
                },
                {
                    text: 'Behind-Back Barbell Wrist Curl',
                    muscleType: 'Arms',
                    muscle: 'Flexor',
                    iconUrl: 'img/arms.png',
                    tips: 'Bending only at the wrists, let the barbell drop as far as possible.',
                },
                {
                    text: 'Leg Extension',
                    muscleType: 'Legs',
                    muscle: 'Quadriceps',
                    iconUrl: 'img/legs.png',
                    tips: 'Adjust the seat so that the knees are directly in line with the axis of the machine.',
                },
                {
                    text: 'Squats',
                    muscleType: 'Legs',
                    muscle: 'Posterior Chain',
                    iconUrl: 'img/legs.png',
                    tips: 'Stand straight with feet hip-width apart. Lower down, as if sitting in an invisible chair.',
                },
                {
                    text: 'Hip Thrust',
                    muscleType: 'Legs',
                    muscle: 'Glutes',
                    iconUrl: 'img/legs.png',
                    tips: 'Use a slight posterior pelvic tilt to enhance glute activation.',
                },
                {
                    text: 'Leg Curl',
                    muscleType: 'Legs',
                    muscle: 'Hamstrings',
                    iconUrl: 'img/legs.png',
                    tips: 'Dont allow the back to arch, keep your hips pressed into the pad.',
                },
                {
                    text: 'Standing Calf Raises',
                    muscleType: 'Legs',
                    muscle: 'Calves',
                    iconUrl: 'img/legs.png',
                    tips: 'Raise your heels slowly, keeping your knees extended (but not locked).',
                },
                {
                    text: 'Cable Hip Adductor',
                    muscleType: 'Legs',
                    muscle: 'Adductors',
                    iconUrl: 'img/legs.png',
                    tips: 'This is not a maximal strength focused movement. Use a challenging weight but do not strain to perform the movement.',
                },
                {
                    text: 'Dumbbell Crunch',
                    muscleType: 'Abs',
                    muscle: 'Upper Abdominis',
                    iconUrl: 'img/abs.png',
                    tips: 'Grab a dumbbell, weight plate, or medicine ball and hold it close to your chest as you lie face-up on an exercise mat with your knees bent and your feet on the floor.',
                },
                {
                    text: 'Hanging Leg Raise',
                    muscleType: 'Abs',
                    muscle: 'Lower Abdominis',
                    iconUrl: 'img/abs.png',
                    tips: 'Work your way up to it. The hanging leg raise is an advanced ab exercise that requires upper body strength and stability.',
                },
                {
                    text: 'Bicycle Crunches',
                    muscleType: 'Abs',
                    muscle: 'Abdominis',
                    iconUrl: 'img/abs.png',
                    tips: 'Twist your body to touch your elbow to the opposite knee with each pedal motion.',
                },
                {
                    text: 'Seated Military Press',
                    muscleType: 'Shoulder',
                    muscle: 'Rear Deltoid',
                    iconUrl: 'img/shoulders.png',
                    tips: 'If you have heavy dumbbells, raise your thighs one at a time to help lift the dumbbells.',
                },
                {
                    text: 'Dumbbell Front Raise',
                    muscleType: 'Shoulder',
                    muscle: 'Anterior Deltoid',
                    iconUrl: 'img/shoulders.png',
                    tips: 'Lower the dumbbells to the starting position (at the thighs) with a slow and controlled motion while exhaling.',
                },
                {
                    text: 'Lat Pulldown',
                    muscleType: 'Back',
                    muscle: 'Latissimus Dorsi',
                    iconUrl: 'img/back.png',
                    tips: 'Resist the temptation to use momentum to pull the bar towards your chest.',
                },
                {
                    text: 'Reverse Fly',
                    muscleType: 'Back',
                    muscle: 'Trapezius',
                    iconUrl: 'img/back.png',
                    tips: 'Raise both arms out to your side on an exhale. Keep a soft bend in your elbows.',
                },
                {
                    text: 'Seated Row',
                    muscleType: 'Back',
                    muscle: 'Latissimus Dorsi',
                    iconUrl: 'img/back.png',
                    tips: 'Avoid lifting your elbows up and out, which engages the biceps instead of the lats and rhomboids.',
                },
                {
                    text: 'Deadlift',
                    muscleType: 'Back',
                    muscle: 'Back',
                    iconUrl: 'img/back.png',
                    tips: 'Check your form before you start the lift: neutral spine, chest up, knees out.',
                },
                {
                    text: 'Superman',
                    muscleType: 'Back',
                    muscle: 'Erector Spinae',
                    iconUrl: 'img/back.png',
                    tips: 'Lie facedown with arms and legs outstretched, forehead on the mat. Your neck should be in a neutral position.',
                },
                {
                    text: 'Bench Press',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Major',
                    iconUrl: 'img/chest.png',
                    tips: 'Keep a tight grip on the bar at all times, a tighter grip equates to more tension in the lower arms, upper back and chest.',
                },
                {
                    text: 'Incline Bench Press',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Major',
                    iconUrl: 'img/chest.png',
                    tips: 'Keep the bar in line with your wrist and elbows and ensure it travels in a straight line.',
                },
                {
                    text: 'Cable Chest Flys',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Major & Minor',
                    iconUrl: 'img/chest.png',
                    tips: 'Stand between two cables positioned above shoulder level, gripping them with your palms facing forward.',
                },
                {
                    text: 'Decline Press',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Minor',
                    iconUrl: 'img/chest.png',
                    tips: 'Unrack a weighted barbell with a grip slightly wider than shoulder-width apart.',
                },
            ],

        }
    }
}).mount('#app');