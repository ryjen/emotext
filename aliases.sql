DELETE FROM aliases;

INSERT INTO aliases(name, action_id, inserted_at, updated_at) VALUES
(':-)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp ),
(':D', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':o)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':]', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':3', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':c)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':>', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
('=]', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
('8)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
('=)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':}', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':^)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),
(':っ)', (SELECT id FROM actions a WHERE a.name = 'smile' LIMIT 1), current_timestamp, current_timestamp),

           
(':-D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('8-D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('8D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('x-D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('xD', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('X-D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('XD', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('=-D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('=D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('=-3', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('=3', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),
('B^D', (SELECT id FROM actions a WHERE a.name = 'laugh' LIMIT 1), current_timestamp, current_timestamp),

(':-))', (SELECT id FROM actions a WHERE a.name = 'beam' LIMIT 1), current_timestamp, current_timestamp),

('>:[', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':-(', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':(', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':-c', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':c', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':-<', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':っC', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':<', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':-[', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':[', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),
(':{', (SELECT id FROM actions a WHERE a.name = 'frown' LIMIT 1), current_timestamp, current_timestamp),


(':-||', (SELECT id FROM actions a WHERE a.name = 'fume' LIMIT 1), current_timestamp, current_timestamp),
(':@', (SELECT id FROM actions a WHERE a.name = 'fume' LIMIT 1), current_timestamp, current_timestamp),
('>:(', (SELECT id FROM actions a WHERE a.name = 'fume' LIMIT 1), current_timestamp, current_timestamp),
  
 (';-)', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
(';)', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
('*-)', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
('*)', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
(';-]', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
(';]', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
(';D', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
(';^)', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp),
(':-,', (SELECT id FROM actions a WHERE a.name = 'wink' LIMIT 1), current_timestamp, current_timestamp), 
        

('>:P', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':-P', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':P', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
('X-P', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
('x-p', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
('xp', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
('XP', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':-p', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':p', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
('=p', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':-Þ', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':Þ', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':þ', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':-þ', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':-b', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
(':b', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
('d:', (SELECT id FROM actions a WHERE a.name = 'raspberry' LIMIT 1), current_timestamp, current_timestamp),
                
(':$', (SELECT id FROM actions a WHERE a.name = 'blush' LIMIT 1), current_timestamp, current_timestamp),

('O:-)', (SELECT id FROM actions a WHERE a.name = 'innocent' LIMIT 1), current_timestamp, current_timestamp),
     
('o/\o', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp),
('^5', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp),
('>_>^', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp),
('^<_<', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp),

('\o/', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp),

('@}-;-''---', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp),
('@>-->--', (SELECT id FROM actions a WHERE a.name = 'highfive' LIMIT 1), current_timestamp, current_timestamp);


