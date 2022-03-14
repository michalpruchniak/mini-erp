import { Validators } from "@angular/forms"

export default {
    client_id: ['', [Validators.required]],
    courier: ['', [Validators.required]],
    address: ['', [Validators.required,
                   Validators.minLength(6)
                  ]],
    phone: ['', [Validators.required,
                 Validators.pattern('[+0-9]{9,12}')
                ]
           ],
    salesChannel: ['', [Validators.required]],
  }
