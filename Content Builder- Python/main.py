from flask import Flask, render_template, request, redirect, url_for
import os
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/preview', methods=['POST'])
def preview():
    markdown = request.form['markdown']
    html = subprocess.check_output(['hugo', 'convert', 'markdown', 'html'], input=markdown.encode())
    return render_template('preview.html', html=html.decode())

@app.route('/save', methods=['POST'])
def save():
    markdown = request.form['markdown']
    with open('content.md', 'w') as f:
        f.write(markdown)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
