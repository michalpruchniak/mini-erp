import { Validators } from "@angular/forms"

export default {
    name: ['', [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(45)
               ]
          ],
    city: ['', [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(40)
               ]
          ],
    streetNumber: ['', [Validators.required,
                        Validators.maxLength(4)
                  ]
              ],
    flatNumber: ['', [Validators.maxLength(4)]],
    phoneNumber: ['', [Validators.pattern('[+0-9]{9,12}')]]
  }
