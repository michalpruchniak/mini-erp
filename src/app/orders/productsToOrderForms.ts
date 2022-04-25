import { Validators } from "@angular/forms"

export default {
    product_id: ['', [Validators.required]],
    amount: ['', [Validators.required,
                  ]],
    price: ['', [Validators.required,
                ]
           ],
  }
