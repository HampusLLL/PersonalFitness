import jsonExercises from './exercises.json' assert { type: "json" };
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
            for(let i = 0; i < selectedSetsReps.length; i++){
                selectedSetsReps[i].value = 'none'
            }
        },
        removeExercise(exercise){
            localStorage.removeItem('addedExercises_' + exercise.exerciseID)
            this.updateList()
        },
        resetExercises(){
            localStorage.clear();
            this.updateList();
            this.exerciseIdCounter = 0;
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
            this.myWorkout = [],
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
            myWorkout: [],
            exercises: jsonExercises
        }
    }
}).mount('#app');