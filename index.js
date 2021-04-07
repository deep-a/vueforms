new Vue({
    el: '#vue-app',
    data: {
        // Form Values.
        form: {
            firstName: '',
            lastName: '',
            date: '',
            occupation: '',
            terms: false
        },
        // Checkbox.
        isValid: false,

        // To hide form and show the thank you page using 'v-show'.
        hide: true,
        showThanks: false,

        // Select Menu.
        occupations: [
            {
                label: 'Developer',
                value: 'Developer'
            },
            {
                label: 'Engineer',
                value: 'Engineer'
            },
            {
                label: 'Physician',
                value: 'Physician'
            },
            {
                label: 'Other',
                value: 'Other'
            }
        ]
    },

    // Form Validation.
    watch: {
        form: {
            deep: true,
            handler: function (data) {
                if (!data.firstName.length) {
                    this.isValid = false;
                    return;
                }
                if (!data.lastName.length) {
                    this.isValid = false;
                    return;
                }
                if (!data.occupation) {
                    this.isValid = false;
                    return;
                }
                if (!data.date) {
                    this.isValid = false;
                    return;
                }
                if (!data.terms) {
                    this.isValid = false;
                    return;
                }

                this.isValid = true;
            }
        }
    },

    // Capitalizing first and last name initials.
    computed: {
        FirstNameCapitalize() {
            return this.form.firstName.charAt(0).toUpperCase() + this.form.firstName.slice(1).toLowerCase();
        },
        LastNameCapitalize() {
            return this.form.lastName.charAt(0).toUpperCase() + this.form.lastName.slice(1).toLowerCase();
        }
    },

    // Converting form values to JSON string and showing in console.
    methods: {
        processForm: function () {
            let user = {
                firstName: this.FirstNameCapitalize,
                lastName: this.LastNameCapitalize,
                date: this.form.date,
                occupation: this.form.occupation,
                terms: this.form.terms,
            }
            console.log(JSON.stringify(user))
        },
    }
})