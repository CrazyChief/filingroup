from django import forms


class TakeAccessForm1(forms.Form):
    name = forms.CharField()
    phone = forms.CharField(required=False)
    email = forms.EmailField()

    def __init__(self, *args, **kwargs):
        super(TakeAccessForm1, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'placeholder': 'Введите ваше имя',
        })
        self.fields['phone'].widget.attrs.update({
            'placeholder': 'Телефон* (+380930001122)',
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'Введите ваш email',
        })


class TakeAccessForm2(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()

    def __init__(self, *args, **kwargs):
        super(TakeAccessForm2, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'placeholder': 'Введите ваше имя',
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'Введите ваш email',
        })


class ConsultForm1(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    phone = forms.CharField()
    skype = forms.CharField(required=False)

    def __init__(self, *args, **kwargs):
        super(ConsultForm1, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'placeholder': 'Имя*',
        })
        self.fields['phone'].widget.attrs.update({
            'placeholder': 'Телефон* (+380930001122)',
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'E-Mail*',
        })
        self.fields['skype'].widget.attrs.update({
            'placeholder': 'Скайп',
        })


class WebinarMoreForm(forms.Form):
    email = forms.EmailField()

    def __init__(self, *args, **kwargs):
        super(WebinarMoreForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs.update({
            'placeholder': 'E-Mail*',
        })


class CourseMinForm(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    hidden_choice = forms.CharField(required=False, widget=forms.HiddenInput)

    def __init__(self, *args, **kwargs):
        super(CourseMinForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'placeholder': 'Имя*',
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'E-Mail*',
        })
