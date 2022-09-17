with open('instagram_body.txt', encoding='utf-8') as file:
    for line in file.readlines():
        line = line.encode()
        line = line.decode('utf-16-le')
        print(line)
        break