from bs4 import BeautifulSoup

# Load the HTML content (you could also load it from a file)
with open(r'C:\Users\Utente\Desktop\web site\files\index.html', 'r', encoding='utf-8') as html_file:
    html_content = html_file.read()  # Leggi il contenuto del file

# Parse the HTML with BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Find the "About Me" section by its ID and modify its content
about_section = soup.find(id="about")
if about_section:
    new_about_text = '''
    <p>I am an embedded systems developer with a passion for efficient software solutions. 
    I focus on creating reliable and scalable applications for industries such as Automotive, Energy, 
    and Structural Monitoring. In addition to my technical skills, I emphasize clear communication and collaboration with teams.</p>
    '''
    about_section.find('p').string = new_about_text

# Save the modified HTML content to a new file
with open(r'C:\Users\Utente\Desktop\web site\files\updated_index.html', 'w', encoding='utf-8') as file:
    file.write(str(soup))

print("HTML content updated successfully!")
