import { Validators } from "@angular/forms"

export default {
    product: ['', [Validators.required]],
    amount: ['', [Validators.required,
                  ]],
    price: ['', [Validators.required,
                ]
           ],
  }
