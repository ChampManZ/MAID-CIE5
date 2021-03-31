#define S0 4
#define S1 5
#define S2 6
#define S3 7
#define sensorOut 8

#define LED_R 10
#define LED_G 11
#define LED_B 12

int redFrequency = 0;
int greenFrequency = 0;
int blueFrequency = 0;

int redColor = 0;
int greenColor = 0;
int blueColor = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT);
  pinMode(S3, OUTPUT);
  pinMode(sensorOut, INPUT);

  pinMode(LED_R, OUTPUT);
  pinMode(LED_G, OUTPUT);
  pinMode(LED_B, OUTPUT);
  
  digitalWrite(S0, HIGH);
  digitalWrite(S1, LOW);

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  redData();
  greenData();
  blueData();

  Serial.println(" ");
}

void redData() {
  digitalWrite(S2, LOW);
  digitalWrite(S3, LOW);

  redFrequency = pulseIn(sensorOut, LOW);
  redColor = map(redFrequency, 25, 73, 255, 0);

  Serial.print("R= ");
  Serial.println(redColor);
  delay(100);
}

void greenData() {
  digitalWrite(S2, HIGH);
  digitalWrite(S3, HIGH);

  greenFrequency = pulseIn(sensorOut, LOW);
  greenColor = map(greenFrequency, 30,90,255,0);

  Serial.print("G= ");
  Serial.println(greenColor);
  delay(100);
}

void blueData() {
  digitalWrite(S2, LOW);
  digitalWrite(S3, HIGH);

  blueFrequency = pulseIn(sensorOut, LOW);
  blueColor = map(blueFrequency, 25,70,255,0);

  Serial.print("B= ");
  Serial.println(blueColor);
  delay(100);
}
