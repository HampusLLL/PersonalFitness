Vue.createApp({
    methods: {
        addExercise(exercise) {
            if(this.sets && this.reps != ''){
                let addedExercise = exercise
                let exerciseObject = {
                    exerciseText: addedExercise.text,
                    exerciseMuscleType: addedExercise.muscleType,
                    exerciseMuscle: addedExercise.muscle,
                    exerciseIconUrl: addedExercise.iconUrl,
                    exerciseTips: addedExercise.tips,
                    exerciseSets: this.sets,
                    exerciseReps: this.reps,
                };
                // this.myWorkout.push(exerciseObject);

                let exerciseObjectSerialized = JSON.stringify(exerciseObject);
                localStorage.setItem('addedExercise', exerciseObjectSerialized);
                let exerciseObjectDeserialized = JSON.parse(localStorage.getItem('addedExercise'));
                this.myWorkout.push(exerciseObjectDeserialized);
            }
            else{
                return
            }
        },
        exerciseList() {
            if (this.muscleGroup == 'All') {
                return this.exercises
            }
            else {
                return this.exercises.filter((exercise) => exercise.muscleType == this.muscleGroup)
            }
        },
        myWorkoutList() {
            return this.myWorkout
        }
    },
    data() {
        return {
            exerciseTextsModel: '',
            sets: '',
            reps: '',
            muscleGroup: '',
            myWorkout: [
                // {
                //     exerciseText: 'Barbell Curl',
                //     exerciseMuscleType: 'Arms',
                //     exerciseMuscle: 'Bicep',
                //     exerciseIconUrl: 'img/arms.png',
                //     exerciseTips: 'If you have to swing at the hips to lift the weight, its too heavy.',
                //     exerciseSets: '3-5',
                //     exerciseReps: '6-8',
                // },
                // {
                //     exerciseText: 'Behind-Back Barbell Wrist Curl',
                //     exerciseMuscleType: 'Arms',
                //     exerciseMuscle: 'Flexor',
                //     exerciseIconUrl: 'img/arms.png',
                //     exerciseTips: 'Slowly raise the barbell up as far as possible squeezing the forearm muscles at the top of the movement. Only your wrists should be moving.',
                //     exerciseSets: '4-6',
                //     exerciseReps: '12-15',
                // },
                // {
                //     exerciseText: 'Cable Extension',
                //     exerciseMuscleType: 'Arms',
                //     exerciseMuscle: 'Triceps',
                //     exerciseIconUrl: 'img/arms.png',
                //     exerciseTips: 'Make sure to keep your upper arm stationary throughout the movement.',
                //     exerciseSets: '4-6',
                //     exerciseReps: '12-15',
                // },
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
                    iconUrl: 'img/arms.png'
                },
                {
                    text: 'Hammer Curl',
                    muscleType: 'Arms',
                    muscle: 'Bicep',
                    iconUrl: 'img/arms.png'
                },
                {
                    text: 'Skull Crusher',
                    muscleType: 'Arms',
                    muscle: 'Triceps',
                    iconUrl: 'img/arms.png'
                },
                {
                    text: 'Reverse Biceps Curl',
                    muscleType: 'Arms',
                    muscle: 'Flexor',
                    iconUrl: 'img/arms.png'
                },
                {
                    text: 'Behind-Back Barbell Wrist Curl',
                    muscleType: 'Arms',
                    muscle: 'Flexor',
                    iconUrl: 'img/arms.png'
                },
                {
                    text: 'Leg Extension',
                    muscleType: 'Legs',
                    muscle: 'Quadriceps',
                    iconUrl: 'img/legs.png'
                },
                {
                    text: 'Squats',
                    muscleType: 'Legs',
                    muscle: 'Posterior Chain',
                    iconUrl: 'img/legs.png'
                },
                {
                    text: 'Hip thrust',
                    muscleType: 'Legs',
                    muscle: 'Glutes',
                    iconUrl: 'img/legs.png'
                },
                {
                    text: 'Leg curl',
                    muscleType: 'Legs',
                    muscle: 'Hamstrings',
                    iconUrl: 'img/legs.png'
                },
                {
                    text: 'Standing Calf Raises',
                    muscleType: 'Legs',
                    muscle: 'Calves',
                    iconUrl: 'img/legs.png'
                },
                {
                    text: 'Cable Hip Adductor',
                    muscleType: 'Legs',
                    muscle: 'Adductors',
                    iconUrl: 'img/legs.png'
                },
                {
                    text: 'Dumbbell Crunch',
                    muscleType: 'Abs',
                    muscle: 'Upper Abdominis',
                    iconUrl: 'img/abs.png'
                },
                {
                    text: 'Hanging Leg Raise',
                    muscleType: 'Abs',
                    muscle: 'Lower Abdominis',
                    iconUrl: 'img/abs.png'
                },
                {
                    text: 'Bicycle Brunches',
                    muscleType: 'Abs',
                    muscle: 'Abdominis',
                    iconUrl: 'img/abs.png'
                },
                {
                    text: 'Seated Military Press',
                    muscleType: 'Shoulder',
                    muscle: 'Rear Deltoid',
                    iconUrl: 'img/shoulders.png'
                },
                {
                    text: 'Dumbbell Front Raise',
                    muscleType: 'Shoulder',
                    muscle: 'Anterior Deltoid',
                    iconUrl: 'img/shoulders.png'
                },
                {
                    text: 'Reverse Fly',
                    muscleType: 'Shoulder',
                    muscle: 'Posterior Deltoids',
                    iconUrl: 'img/shoulders.png'
                },
                {
                    text: 'Lat Pulldown',
                    muscleType: 'Back',
                    muscle: 'Latissimus Dorsi',
                    iconUrl: 'img/back.png'
                },
                {
                    text: 'Reverse Fly',
                    muscleType: 'Back',
                    muscle: 'Trapezius',
                    iconUrl: 'img/back.png'
                },
                {
                    text: 'Seated Row',
                    muscleType: 'Back',
                    muscle: 'Latissimus Dorsi',
                    iconUrl: 'img/back.png'
                },
                {
                    text: 'Deadlift',
                    muscleType: 'Back',
                    muscle: 'Back',
                    iconUrl: 'img/back.png'
                },
                {
                    text: 'Superman',
                    muscleType: 'Back',
                    muscle: 'Erector Spinae',
                    iconUrl: 'img/back.png'
                },
                {
                    text: 'Bench Press',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Major',
                    iconUrl: 'img/chest.png'
                },
                {
                    text: 'Incline Bench Press',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Major',
                    iconUrl: 'img/chest.png'
                },
                {
                    text: 'Cable Chest Flys',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Major & Minor',
                    iconUrl: 'img/chest.png'
                },
                {
                    text: 'Decline Press',
                    muscleType: 'Chest',
                    muscle: 'Pectoralis Minor',
                    iconUrl: 'img/chest.png'
                },
            ],

        }
    }
}).mount('#app');