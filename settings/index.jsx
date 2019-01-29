function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Message 1</Text>}>
        <TextInput
          settingsKey="Label1"
          label="Label:"
        />
        <TextInput
          settingsKey="URL1"
          label="URL:"
        />
        <TextInput
          settingsKey="Data1"
          label="Data:"
        />
        <TextInput
          settingsKey="Headers1"
          label="Headers:"
        />
      </Section>
      <Section
        title={<Text bold align="center">Message 2</Text>}>
        <TextInput
          settingsKey="Label2"
          label="Label:"
        />
        <TextInput
          settingsKey="URL2"
          label="URL:"
        />
        <TextInput
          settingsKey="Data2"
          label="Data:"
        />
        <TextInput
          settingsKey="Headers2"
          label="Headers:"
        />
      </Section>
      <Section
        title={<Text bold align="center">Message 3</Text>}>
        <TextInput
          settingsKey="Label3"
          label="Label:"
        />
        <TextInput
          settingsKey="URL3"
          label="URL:"
        />
        <TextInput
          settingsKey="Data3"
          label="Data:"
        />
        <TextInput
          settingsKey="Headers3"
          label="Headers:"
        />
      </Section>
      <Section
        title={<Text bold align="center">Instructions</Text>}>
        <Text>
          This is an HTTP/HTTPS client supporting GET and POST requests (though HTTP only works to IP addresses on your own network).
          It is intended for a technically proficient audience and use of its more advanced features requires some understanding of JSON 
          data structures.
          The app allows configuration with three sets of label, URL, data segment (for POST) and headers. Touching that label will then 
          fire off the associated request, and the status text returned will be displayed on the watch and can be dismissed by touching it.
          For example, the label might be 'Send help!' and the URL/data fields contain the request details to send this message to a service 
          that creates a text message (to which you would need to subscribe). 
          The URL is something like 'https://server.domain.com/path' and the data might look something like {"{'key':'message','value':'Help!'} "} 
          or {"{'key':'message','value':'~Lbl'} "} (where ~Lbl is substitited with the label text).
          To test your requests, you might want to use the free testing service at https://www.requestcatcher.com.
          The Pebble version of this app could also substitute location-specific information.  I may implement this later if there's enough interest.
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
