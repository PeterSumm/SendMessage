# SendMessage
Send Message app for Fitbit Versa and Ionic

This is a port of my Send Message app from Pebble - an HTTPS client supporting GET and POST requests (though HTTP only works to IP addresses on your own network).  It is intended for technically proficient audience and use of its more advanced features requires some understanding of JSON data structures.

The app allows configuration with three sets of label, URL, data segment (for POST) and headers.  Touching that label will then fire off the associated request, and the status text returned will be displayed on the watch and can be dismissed by touching it.

For example, the label might be 'Send help!' and the URL/data fields contain the request details to send this message to a service that creates a text message (to which you would need to subscribe).  The URL will be something like 'https://server.domain.com/path' and the data might look something like {"{'key':'message','value':'Help!'} "} or {"{'key':'message','value':'~Lbl'} "} (where ~Lbl is substitited with the label text).

To test your requests, you might want to use the free testing service at https://www.requestcatcher.com.

The compiled version of this app is at https://gam.fitbit.com/gallery/app/08e2723d-c0f3-429c-9cb8-e93086fd604c.

The Pebble version of this app could also substitute location-specific information.  I may implement this later if there's enough interest.
