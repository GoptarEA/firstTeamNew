from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    flash)

from flask_sqlalchemy import SQLAlchemy

from werkzeug.security import generate_password_hash

app = Flask(__name__)  #создание веб-приложения

app.secret_key = 'thisismysecretkey'


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)




class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(20), unique=True)
    password = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(30), unique=True)

    def __repr__(self):
        return f"<users {self.id} {self.email} {self.login} {self.password}"


class Routes(db.Model):
    routeid = db.Column(db.Integer, primary_key=True)
    routepoints = db.Column(db.String(500), nullable=False)

    userid = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __repr__(self):
        return f"<users {self.routeid} {self.userid} {[point for point in self.routepoints.split()]}"



@app.route("/")
@app.route("/profile")
def index():
    return render_template('index.html', title="Основная страница")



@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # проверка логика и пароля
        return redirect(url_for('profile'))
    flash(message="Invalid username or password.", category="message")
    return render_template('login.html')


@app.route("/registration", methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        # Добавление пользователя в базу данных
        return render_template('registration.html')


@app.route('/change_password', methods=['GET', 'POST'])
def change_password():
    #Страница с восстановлением пароля
    return render_template('change_password.html')


@app.route('/password_send', methods=['GET', 'POST'])
def password_send():
    if request.method == 'POST':
        return redirect(url_for('login'))
    # Страница с сообщением что новый пароль отправлен на почту
    return render_template('password_send.html')

@app.route('/delete_account', methods=['GET', 'POST'])
def delete_account():
    # Страница с удалением аккаунта
    return render_template('delete_account.html')











#
# @app.route("/main_page/<check>&<valuelogin>")
# def main_page(check, valuelogin):
#     print(check)
#     print(valuelogin)
#     return render_template('index.html', title="Основная страница", checklogin=check, login=valuelogin)
#
#
# @app.route("/db_error")
# def db_error():
#     return '''
#     <h1><center>Произошла ошибка при регистрации нового пользователя.
#     Не расстраивайтесь и попробуйте зарегистрироваться ещё раз позже.</center></h1>
#     '''
#
# @app.route("/registration", methods=['post', 'get'])
# def registration():
#     if request.method == 'POST':
#         res = Users.query.all()
#         checked = True
#         for person in res:
#             if person.email == request.form.get('email'):
#                 flash(message="Пользователь с таким логином уже существует", category="message")
#                 checked = False
#
#         if checked:
#             try:
#                 hash = generate_password_hash(request.form.get('password'))
#                 u = Users(email=request.form.get('email'), password=hash, login=request.form.get('email'))
#                 db.session.add(u)
#                 db.session.flush()
#
#                 # p = Profiles(login=request.form.get('email'), email=request.form.get('email'),
#                 #              id=u.id)
#                 # db.session.add(p)
#                 db.session.commit()
#             except:
#                 db.session.rollback()
#                 return redirect(url_for("db_error"))
#             return redirect(url_for('main_page', check=True, valuelogin=request.form.get('email')))
#
#         # login = request.form.get('email')
#         # print(login)
#     return render_template('registration.html', title="Регистрация")


if __name__ == "__main__":
    app.run(debug=True)   #запуск веб-сервера



