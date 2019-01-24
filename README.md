# SendMessage
Send Message app for Fitbit Versa and Ionic

This is an HTTP/HTTPS client supporting GET and POST requests (though HTTP only works to IP addresses on your own network).  
It can be configured with three sets of label, URL, data segment (if using POST) and headers.

For example, the label might be 'I need help.' and the other fields contain the request details to send this message to some server. 
The URL is something like 'https://server.domain.com/path' and the data might look something like {"{'key':'message','value':'Help!'} "} 
or {"{'key':'message','value':'~Lbl'} "} (where ~Lbl is substitited with the label text).

The Pebble version of this app could also substitute location-specific information.  I may implement this later if there's enough interest.
