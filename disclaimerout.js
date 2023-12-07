function resultView(){
  //<![CDATA[

var _0xd3de = [ "value", "#company_name", "querySelector", "#website_name", "#website_url", "#email_address", "val", "input[type='radio'][name='cookies_usage']:checked", "input[type='radio'][name='google_adsense_usage']:checked", "input[type='radio'][name='additional_advertising_party_usage']:checked", "#technicalarpresult" ]; 
  const comID=document[_0xd3de[2]](_0xd3de[1])[_0xd3de[0]];const websiteID=document[_0xd3de[2]](_0xd3de[3])[_0xd3de[0]];
  const bgurl=document[_0xd3de[2]](_0xd3de[4])[_0xd3de[0]];const blurb=document[_0xd3de[2]](_0xd3de[5])[_0xd3de[0]];const cuse=$(_0xd3de[7])[_0xd3de[6]]();;;const guse=$(_0xd3de[8])[_0xd3de[6]]();;;const ouse=$(_0xd3de[9])[_0xd3de[6]]();;;const markupContainer=document[_0xd3de[2]](_0xd3de[10])
const markup2='';
const markup3='';
const markup4='';
const markup5='';
const markup = `
<div>
<div class="preview">
<h1>Disclaimer for <b>${comID}</b></h1>
<p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <b>${blurb}</b>.Our Disclaimer was generated with the help of the <a href="https://www.yourwebsitename.net/">Disclaimer Generator</a>.</p>
<h2>Disclaimers for <b>${websiteID}</b></h2>
<p>All the information on this website - <b>${bgurl} </b> - is published in good faith and for general information purpose only. <b>${websiteID}</b> does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (<b>${websiteID}</b>), is strictly at your own risk. <b>${websiteID}</b> will not be liable for any losses and/or damages in connection with the use of our website.</p>
<p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
<p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>
<h2>Consent</h2>
<p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
<h2>Update</h2>
<p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p> </div>
	`;

var _0x8584 = [ "", "yes", "textContent", "append", ".technicalarppreview" ];
let markupfinal=_0x8584[0];let cv=false;let gv=false;let ov=false;if(cuse== _0x8584[1]){cv= true};if(guse== _0x8584[1]){gv= true};if(ouse== _0x8584[1]){ov= true};markupfinal= markup+ (cv== true?markup2:_0x8584[0])+ (gv== true?markup3:_0x8584[0])+ (ov== true?markup4:_0x8584[0])+ markup5;markupContainer[_0x8584[2]]= markupfinal;$(_0x8584[4])[_0x8584[3]](markupfinal)

}
