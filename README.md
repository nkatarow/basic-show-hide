More-Info.js
===============
**A javascript component for hiding and showing hidden containers by clicking a trigger**

###Author
Nick Katarow (<http://github.com/nkatarow>)

###Usage
Trigger will hide and show hidden div(s), a close trigger is also provided within the hidden container.  

Match up your anchor href to your hidden div's ID after 'info-' (see below). 

Script will detect the height of content living in the "content" div and set the max-height of the container accordingly. Script currently adds 50 for account for a little extra padding.

###Required Markup and Styling

**Trigger**

	<a href="#info-CHANGE" class="more-info">Trigger</a>

**Container**

	<div id="info-CHANGE" class="status-container">
		<div class="content info">
			<p>Here's some hidden content</p>
			<a href="#" class="close">Close</a>
		</div>
	</div>

**Required Styling**

	.status-container {
    	max-height: 0;
    	overflow: hidden;
	}