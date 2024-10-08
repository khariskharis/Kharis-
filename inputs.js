/* 
Step 7: Connecting EmailOctopus and Calendly to your website
- Add your EmailOctopus and Calendly links between the quotation marks '' below
*/
const emailOctopusScript = '<script async src="https://eocampaign1.com/form/f9118634-5e63-11ef-b582-6d11d4af2273.js" data-form="f9118634-5e63-11ef-b582-6d11d4af2273"></script>'

const calendlyLink = ''


/*
Step 8: Adding your logo
*/
const logoFileName = 'logo.png'


/*
Step 9: Website Content and Branding
- Here we will outline how we want the website to look like
- To do this we will be using HEX codes which we discussed in Step 4  
- Below you can see the HEX codes for the colors white and black

White HEX color code: #FFFFFF
Black HEX color code: #000000
*/

// HIGH PRIORITY CHANGES
// 2. Change project name and colours:
const companyName = 'Kharis'
const companyNameColor = '#b7d792'

const formButtonBackgroundColor = '#3f5127'
const formButtonTextColor = '#000000' // Make this either black (#000000) or white (#FFFFFF) depending on what is easiest to read on your button color of choice

// 3. Update social media links:
const facebookLink = ''
const instagramLink = 'https://www.instagram.com/khxris/'
const xLink = 'https://x.com/khxris'
const linkedinLink = ''
const youtubeLink = 'https://www.youtube.com/@khxris'
const tiktokLink = 'https://www.tiktok.com/@khariswashere?_t=8pbwxjIXOMr&_r=1'
const discordLink = ''

// 4. Update header and description texts:
const headerText = 'Kharis' // One-line description of what you will offer customers
const descriptionText = '' // More detailed description of what you will offer customers

const headerTextSize = '66' // Default size is 66
const descriptionTextSize = '42' // Default size is 42

// 5. Update contact email:
const contactEmail = 'prodkharis@gmail.com'



// LOW PRIORITY CHANGES
// Branding: Update with different background and text colors if needed
const pageBackgroundColor = 'yee.jpg'
const pageTextColor = '#FFFFFF'
const formTextColor = '#3f5127'

// Social media: Update the call to action with your own
const socialMediaCallToAction = 'Follow me!'

// Waitlist: Update the call to action with your own
const waitlistCallToAction = 'Be first to hear the new drop🔥'

// Calendly: Update the calls to action with your own
const meetingCallToAction = 'Talk to us'
const meetingButtonText = 'Schedule a meeting'



// LOWEST PRIORITY CHANGES (For special cases)
// Forms: Change if it does not fit with your new background color
const formBackgroundColor = '#FFFFFF'
const formBorderColor = '#CCC'

// Social media: Change the colors if they do not fit with your new background color
const facebookLogoColor = '#4267B2'
const instagramLogoColor = '#E1306C'
const xLogoColor = '#000000'
const linkedinLogoColor = '#0077b5'
const youtubeLogoColor = '#FF0000'
const tiktokLogoColor = '#000000'
const discordLogoColor = '#5865F2'
























// Ignore the below code. It allows us to use the variables you have defined.
function splitScript(script) {
    const srcMatch = script.match(/src="([^"]+)"/);
    const dataFormMatch = script.match(/data-form="([^"]+)"/);

    const waitlistFormScriptSrc = srcMatch ? srcMatch[1] : null;
    const waitlistFormScriptDataForm = dataFormMatch ? dataFormMatch[1] : null;

    return {
        waitlistFormScriptSrc,
        waitlistFormScriptDataForm
    };
}

const { waitlistFormScriptSrc, waitlistFormScriptDataForm } = splitScript(emailOctopusScript);
