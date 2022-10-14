function validator(options) {
    
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];


        // Lặp qua từng rule & kiểm tra
        for(var i = 0; i< rules.length; ++i){

            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            
            if(errorMessage) break;
        }

        if(errorMessage) {
                errorElement.innerText = errorMessage;
                getParent(inputElement, options.formGroupSelector).classList.add('invalid');
            }
        else {
                errorElement.innerText = '';
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
            }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);

    if(formElement) {
        
        // Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // Thực hiện lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var isValid = validate(inputElement, rule);
            if(!isValid) isFormValid = false;
            });


            
            
            if(isFormValid) {
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    values[input.name] = ''; 
                                    return values;
                                }
                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = []; 
                                }
                                values[input.name].push(input.value); 
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {})
                    options.onSubmit(formValues);
                }
            }
        }

        // Lặp qua mỗi rule và xử lý
        options.rules.forEach(function (rule) {
            var inputElements = formElement.querySelectorAll(rule.selector);
            // Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý mỗi khi blue
                inputElement.onblur = function () {
                    // values: inputElement, value
                    // test function: rules.test
                validate(inputElement, rule);
                }

            // Xử lý mỗi khi nhập input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            })
        })
    }
}

// Định nghĩa các rules
validator.isRequired = function (selector, message) {
    return{
        selector: selector,
        test: function (value)  {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

validator.isEmail = function(selector, message) {
    return{
        selector: selector,
        test: function (value)  {
            var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

validator.isPhone = function(selector, message) {
    return{
        selector: selector,
        test: function (value)  {
            var regex =  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return regex.test(value) ? undefined : message || 'Trường này phải là SĐT'
        }
    }
}

validator.minLength = function(selector, min, message) {
    return{
        selector: selector,
        test: function (value)  {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

validator.isConfirmed = function(selector, getConfirmValue, message) {
    return{
        selector: selector,
        test: function (value)  {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}