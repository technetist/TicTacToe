          <?php
          require 'lib/Stripe.php';

          $error = '';
          $success = '';
              
          if ($_POST) {
            Stripe::setApiKey("sk_test_X7nxQNzh9FRIuUW5tyLIkDOr");

            try {
              if (!isset($_POST['stripeToken']))
                throw new Exception("The Stripe Token was not generated correctly");
              Stripe_Charge::create(array("amount" => 299,
                                          "currency" => "usd",
                                          "card" => $_POST['stripeToken']));
              $success = '<div class="alert alert-success">
                          <strong>Success!</strong> Your payment was successful.
                  </div>';
            }
            catch (Exception $e) {
            $error = '<div class="alert alert-danger">
                  <strong>Error!</strong> '.$e->getMessage().'
                  </div>';
            }
          }
          ?>