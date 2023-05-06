var object = {
        a: 123,
        b: 159,
        c: 789
};

if (typeof (Storage) !== 'undefined') alert ('support')
else alert('unsupport')

localStorage.setItem('abc', 'hihihi')
localStorage.cuoi = object.b
localStorage.setItem('test', JSON.stringify(object))
localStorage['cuoi2'] = 'hehehe'

document.write('cuoi = '+localStorage.getItem('cuoi'))

localStorage.removeItem('cuoi')

document.cookie = "myname = Nghia";