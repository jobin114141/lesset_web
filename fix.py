with open('f:/joeKuttan_web/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'const subject = encodeURIComponent("Website Contact Form: " + name);' in line and 'body' not in line:
        new_lines.append('                </div>\n            </div>\n            <div class="border-t border-surface-container flex flex-col sm:flex-row justify-between items-center gap-base -mt-8 pt-3 md:-mt-12">\n                <p class="text-secondary/60 text-sm">&copy; 2026 Lisset Transport Inc. All Rights Reserved.</p>\n            </div>\n        </div>\n    </div>\n</footer>\n\n<script>\n    function handleContactSubmit(event) {\n        event.preventDefault();\n        const name = document.getElementById("name").value;\n        const email = document.getElementById("email").value;\n        const phone = document.getElementById("phone").value;\n        const message = document.getElementById("message").value;\n')
    new_lines.append(line)

with open('f:/joeKuttan_web/index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print('Fixed index.html')
