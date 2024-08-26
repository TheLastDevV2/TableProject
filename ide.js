let win = window.open('', '', 'height=700,width=700');

win.document.write('< htm l>< head >');

win.document.write('< title >Profile '); // < title > FOR PDF HEADER.

win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.

win.document.write('< /head >');

win.document.write('< body >');

win.document.write(sTable); // THE TABLE CONTENTS INSIDE THE BODY TAG.

win.document.write('< /body >< /html >');