# Divorce guide form setup

The three guide buttons open the dedicated Pivot Point form in an accessible dialog.

Form: https://link.pivotpointcrm.com/widget/form/9unzlrGXk9VQ2ghj04H7

Before publication, configure this form in Pivot Point:

1. Require name, email, and phone.
2. Set the successful-submission action to redirect to:
   https://www.theherbertteam.com/divorce-mortgage-planning/thank-you
3. Verify a successful submission creates the expected CRM contact and reaches the guide download page. Do not treat validation failures as success.

The website does not infer success from generic iframe messages. CRM validation and the CRM redirect control delivery. The PDF remains a public static resource; this is lead capture, not access control. The thank-you page is noindex.

The form could not be inspected from the implementation environment (browser ERR_BLOCKED_BY_CLIENT; HTTP fetch 403). Required fields, redirect settings, and CRM receipt must therefore be verified in Pivot Point before publishing.
