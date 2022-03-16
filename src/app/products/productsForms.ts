import { Validators } from "@angular/forms"

export default {
    name: ['', [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(45)
               ]
        ],
    price : ['', [Validators.required
                 ]
            ],
    description: ['', [Validators.required,
                       Validators.minLength(10),
                       Validators.maxLength(600)
                  ]
              ],
  }
